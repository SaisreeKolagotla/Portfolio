import { Resend } from "resend";

// Resend constructor throws if the API key is empty/undefined.
// We use a placeholder key here to allow Next.js build to succeed if the env variable is not set yet.
const apiKey = process.env.RESEND_API_KEY || "re_placeholder_key";
const resend = new Resend(apiKey);
console.log("API KEY:", process.env.RESEND_API_KEY ? "found" : "MISSING");

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    const toAddress = process.env.EMAIL_TO || "saisreereddy0909@gmail.com";

    // Email to YOU
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toAddress,
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0d1117; color: #f1f5f9; padding: 32px; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="margin: 0 0 20px; color: #06b6d4;">New Message from Portfolio</h2>
          <p style="color: #94a3b8; font-size: 13px;">From: <span style="color: #f1f5f9;">${name}</span></p>
          <p style="color: #94a3b8; font-size: 13px;">Email: <span style="color: #06b6d4;">${email}</span></p>
          <p style="color: #94a3b8; font-size: 13px;">Subject: <span style="color: #f1f5f9;">${subject}</span></p>
          <div style="margin-top: 20px; padding: 20px; background: #131d2e; border-radius: 8px; border-left: 3px solid #06b6d4;">
            <p style="margin: 0; color: #f1f5f9; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: "Saisree Reddy Kolagotla <onboarding@resend.dev>",
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0d1117; color: #f1f5f9; padding: 32px; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #06b6d4; margin-top: 0;">Hey ${name}! 👋</h2>
          <p style="color: #94a3b8; line-height: 1.6;">Thanks for getting in touch. I'll get back to you as soon as possible.</p>
          <div style="padding: 16px; background: #131d2e; border-radius: 8px; margin: 20px 0; border-left: 3px solid #06b6d4;">
            <p style="margin: 0; color: #f1f5f9; font-size: 13px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #94a3b8;">Talk soon,<br/><strong style="color: #f1f5f9;">Saisree Reddy Kolagotla</strong><br/><span style="color: #06b6d4; font-size: 13px;">Data Analyst</span></p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again or email directly." },
      { status: 500 },
    );
  }
}
