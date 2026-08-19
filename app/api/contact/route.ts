import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File;

    const attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    await resend.emails.send({
      from: 'EYS LABS Contact <onboarding@resend.dev>',
      to: 'vondern@gmail.com', // Mesajların düşmesini istediğin e-posta adresi
      subject: `[EYS LABS İletişim] ${subject} - ${name}`,
      replyTo: email,
      text: `İsim: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`,
      attachments: attachments,
    });

    return NextResponse.json({ success: true, message: 'Melding sendt!' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Eror ved sending' }, { status: 500 });
  }
}
