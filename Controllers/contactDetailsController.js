import expressAsyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';

const sendContactDetails = expressAsyncHandler(async (req, res) => { 
    const { name, email, subject, message,contact, address, postalCode } = req.body.dataSend;
    
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
        text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nAddress: ${address}\nPostal Code: ${postalCode} \nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
        }
    });

    res.json({message: 'Email sent'});
});

export { sendContactDetails };