import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the request body
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: "Cannot leave an empty field." }), { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ message: "Invalid email address." }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br>${message}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Message sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Error sending message." }), { status: 500 });
    }
}
