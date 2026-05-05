import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();

  if (!phone || !message) {
    return NextResponse.json({ error: 'Phone and message are required.' }, { status: 400 });
  }

  try {
    // Notification email to the business
    await resend.emails.send({
      from: 'Bespoke By Pelican <onboarding@resend.dev>',
      to: 'bespokebypelican@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name || '—'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || '—'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Auto-reply to the user if they provided an email
    if (email) {
      await resend.emails.send({
        from: 'Bespoke By Pelican <onboarding@resend.dev>',
        to: email,
        subject: 'We received your message — Bespoke By Pelican',
        html: `
          <p>Hi${name ? ` ${name}` : ''},</p>
          <p>Thank you for reaching out to Bespoke By Pelican. We've received your message and will get back to you shortly.</p>
          <p>If you need immediate assistance, call us at <strong>1800 833 0046</strong> (Mon–Sun, 9 am – 8 pm).</p>
          <br/>
          <p>Warm regards,<br/>The Bespoke By Pelican Team</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Resend] Error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
