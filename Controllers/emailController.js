import expressAsyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';

const sendEmail = expressAsyncHandler(async (req, res) => { 
    const { name, email, subject, message } = req.body.dataSend;
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error');
        } else {
            res.status(200).send('Email sent');
        }
    });

    res.json({message: 'Email sent'});
});

export { sendEmail };