 import { Resend } from 'resend';
import { NextResponse } from 'next/server';
 const resend = new Resend(process.env.RESEND_API_KEY);

 
 export async function  POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', 
      to: ['joyston.errol26@gmail.com'],
      subject: `New Message from ${name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}