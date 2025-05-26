// app/api/contact/route.js
import nodemailer from 'nodemailer'

// Create a reusable transporter using SMTP settings from env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request) {
  try {
    const { name, email, message, title } = await request.json()

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: title,
      text: message,
      replyTo: email
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error('Email send error:', err)
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 })
  }
}