import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

type FormData = {
    name: string,
    email: string,
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<FormData>
) {
    if (req.method === 'POST') {
        const formData: FormData = req.body as FormData
        try {
            sendEmail(formData)
        } catch (e) {
            console.log((e as Error).message)
        }
        res.status(200).json(formData)
    }
}

async function sendEmail(data: FormData) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            type: 'OAUTH2',
            user: process.env.email,
            accessToken: '',
        },
    });

    transporter.sendMail({
        from: data.name,
        to: process.env.email,
        subject: "Message from " + data.name,
        html: `
                <h3>Informations<h3/>
                <ul>
                <li>Name: ${data.name}<li/>
                <li>Email: ${data.email}<li/>
                </ul>
                <h3>Message</h3>
                <p>${data.message}<p/>
                `,
    }, (error, info) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(info);
        }
    })
}