import { transporter } from '@/lib/NodeMailer';

export async function POST(req: Request) {
    const { email, body } = await req.json();

    if (email == null || body == null) return new Response('Bad Request', { status: 400 });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL,
            subject: 'ApeX Development Client Mail',
            text: `
            Client email: ${email}
                
            ${body}
            `,
        });
        return new Response('Email sent', { status: 200 });
    } catch (e) {
        return new Response(e as string, { status: 400 });
    }
}
