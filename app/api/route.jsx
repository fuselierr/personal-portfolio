import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message} = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            }
        })
    
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
        };
    
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({message: "Message sent successfully!"});
        } catch (error) {
            console.error("Error sending email", error);
            res.status(500).json({ message: "Error sending message. "});
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}