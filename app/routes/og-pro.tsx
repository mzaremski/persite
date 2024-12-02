import { ImageResponse } from '@vercel/og';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') ?? 'Default Title';
  const description = url.searchParams.get('description') ?? 'Default description for the page';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            backgroundColor: '#2a2a2a',
            padding: '40px',
            maxWidth: '80%',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: '#cccccc',
              textAlign: 'center',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};
