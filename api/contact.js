import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullname, email, subject, message } = req.body;

    // Basic validation
    if (!fullname || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email' });
    }

    // Send email ONLY to you (the portfolio owner)
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'najijrwanyt@gmail.com',
      subject: `📬 Portfolio: ${fullname} - ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 10px;">${fullname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Subject:</td>
              <td style="padding: 10px;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Message:</td>
              <td style="padding: 10px;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #666; font-size: 14px;">
            💡 <strong>To reply:</strong> Just hit reply. Your response will go directly to ${fullname} at ${email}
          </p>
        </div>
      `,
    });

    // Return success to the website (no email to sender)
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
    
  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}