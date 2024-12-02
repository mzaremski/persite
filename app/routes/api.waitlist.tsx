// TODO: Pro + fix MONGODB_URI address. Works overall, but fails on vercel
import { json } from '@remix-run/node';
import { MongoClient } from 'mongodb';

interface WaitlistResponse {
  success?: boolean;
  error?: string;
}

// const uri:string = process.env.MONGODB_URI as string;
// if (!uri) {
//   throw new Error('MONGODB_URI is not defined');
// }

let client: MongoClient;

async function getCollection() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db('waitlist').collection('subscribers');
}

export async function action({ request }: { request: Request }) {
  if (request.method !== 'POST') {
    return json<WaitlistResponse>({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const name = formData.get('name')?.toString();

    if (!email || !name) {
      return json<WaitlistResponse>({ error: 'Email and name are required' }, { status: 400 });
    }

    const collection = await getCollection();
    
    // Check if email already exists
    const existing = await collection.findOne({ email });
    if (existing) {
      // Update existing entry
      await collection.updateOne(
        { email },
        { 
          $set: { 
            name,
            updatedAt: new Date()
          }
        }
      );
    } else {
      // Create new entry
      await collection.insertOne({
        email,
        name,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return json<WaitlistResponse>({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return json<WaitlistResponse>({ error: 'Failed to join waitlist' }, { status: 500 });
  }
}
