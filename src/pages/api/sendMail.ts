import { NextApiRequest, NextApiResponse } from "next";
import sgMail from '@sendgrid/mail'

type FormData = {
    name: string,
    email: string,
    message: string
}
type Response = {
    sender?: string,
    message: string,
}

type Email = {
    from: string,
    to: string,
    subject: string,
    html: string
}
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ? process.env.NEXT_PUBLIC_SENDGRID_API_KEY : '')

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    if (req.method === 'POST') {
        const formData: FormData = JSON.parse(req.body) as FormData
        const msg = createEmail(formData)
        try {
            const mail = await sgMail.send(msg)
        } catch (err) {
            console.log(err)
            return res.status(404).json({ message: "Something went wrong" })
        }
        return res.status(200).json({ sender: formData.name, message: "Email has been sent" })
    }
    return res.status(404).json({ message: "Requested endpoint was not found" })
}

function createEmail(data: FormData): Email {
    console.log("Creating email template...")
    return {
        to: process.env.NEXT_PUBLIC_EMAIL as string,
        from: process.env.NEXT_PUBLIC_EMAIL as string,
        subject: "Portfolio Web Message from " + data.name,
        html: `<h3>Information</h3>
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <h3>Message</h3>
                <p>${data.message}</p>`
    };
}