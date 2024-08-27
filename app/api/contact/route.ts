import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

import { ContactEmail } from '@/components/email/contact';
import { NextResponse } from 'next/server';
import { render } from '@react-email/components';

const SES_SENDER_EMAIL = 'contact@danwise.dev';
const DANIEL_EMAIL = 'hi@danwise.dev';

// Initialize the SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const emailHtml = await render(ContactEmail({ name, email, message }));
  const plainText = await render(ContactEmail({ name, email, message }), {
    plainText: true,
  });

  const params = {
    Source: SES_SENDER_EMAIL,
    Destination: {
      ToAddresses: [DANIEL_EMAIL],
    },
    ReplyToAddresses: [email],
    Message: {
      Subject: {
        Data: `New contact form submission from ${name}`,
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: plainText,
        },
        Html: {
          Charset: 'UTF-8',
          Data: emailHtml,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
