import nodemailer from 'nodemailer';

const email = process.env.EMAIL as string;
const password = process.env.PASSWORD as string;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    },
});
