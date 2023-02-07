const nodemailer = require('nodemailer');
require("dotenv").config();


// Creamos un transportador
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",//protocolo de transferencia de correos
    port: "465",
    secure: true,
    auth:{
        user: "daniel.martinez.b11@gmail.com",
        pass: process.env.G_PASS,
    }

});

module.exports = transporter;