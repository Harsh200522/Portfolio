import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    console.log("EMAIL:", process.env.EMAIL_USER); // debug

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   await transporter.sendMail({
  from: `"${name}" <${process.env.EMAIL_USER}>`, // Shows sender name in inbox
  to: "harshgilitwala7@gmail.com",
  replyTo: email,
  subject: `Portfolio Message from ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; color: #2d2d2d; line-height: 1.6; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e2e2e2; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #667eea; text-align: center;">New Portfolio Message</h2>
      <hr style="border: none; border-top: 2px solid #667eea; margin: 20px 0;">
      
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="padding: 15px; background-color: #ffffff; border-radius: 8px; border: 1px solid #ddd;">${message}</p>

      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      <p style="font-size: 12px; color: #888; text-align: center;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `,
});


    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}
