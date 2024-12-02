import { useState } from 'react';
import { Form, useActionData } from '@remix-run/react';
import { TextField, Button } from '@radix-ui/themes';

interface WaitlistResponse {
  success?: boolean;
  error?: string;
}

export default function WaitlistForm() {
  const actionData = useActionData<WaitlistResponse>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Form
      method="post"
      action="/api/waitlist"
      onSubmit={() => setIsSubmitting(true)}
      className="space-y-4 max-w-md mx-auto"
    >
      <TextField.Root
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <TextField.Root
        type="email"
        name="email"
        placeholder="Your email"
        required
      >
      </TextField.Root>

      <Button 
        type="submit"
        disabled={isSubmitting}
        style={{ width: '100%' }}
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </Button>

      {actionData?.error && (
        <p style={{ color: 'var(--red-11)' }} className="text-sm">{actionData.error}</p>
      )}
      {actionData?.success && (
        <p style={{ color: 'var(--green-11)' }} className="text-sm">Successfully joined the waitlist!</p>
      )}
    </Form>
  );
}
