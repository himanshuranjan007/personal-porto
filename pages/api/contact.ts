import type { NextApiRequest, NextApiResponse } from "next"
// import nodemailer from "nodemailer"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hr731977@gmail.com", // Your email address
      subject: `New message from ${name} via your portfolio`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>You have a new message from your portfolio contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: "Message sent successfully" })
    } catch (error) {
      console.error("Error sending email:", error)
      res.status(500).json({ error: "Error sending message" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

