import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

type FormData = {
    name: string,
    email: string,
    message: string
}
type ErrorResponse = {
    message: string,
}

type Email = {
    from: string,
    to: string,
    subject: string,
    html: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<FormData | ErrorResponse>
) {
    if (req.method === 'POST') {
        const formData: FormData = JSON.parse(req.body) as FormData
        try {
            sendEmail(formData)
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message)
                res.status(400).json({ message: err.message })
            }
        }
        res.status(200).json(formData)
    }
}

async function sendEmail(data: FormData) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_PWD,
        },
    });
    const mail = createEmail(data)
    transporter.sendMail(mail, (error, info) => {
        if (error) {
            console.log("Something went wrong:")
            console.log(error.message);
            throw Error(error.message)
        } else {
            console.log("Email Sent")
            console.log(info);
        }
    })
}

function createEmail(data: FormData): Email {
    console.log("Creating email template...")
    return {
        from: data.name,
        to: process.env.NEXT_PUBLIC_EMAIL ? process.env.NEXT_PUBLIC_EMAIL : '',
        subject: "Portfolio Web Message from " + data.name,
        html: `<h3>Information</h3>
                <p>Name: ${data.name}</p>
               <p>Email: ${data.email}</p>
               <h3>Message</h3>
               <p>${data.message}</p>`,
    };
}