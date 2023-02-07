const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const ecomerceRouter = require('./routes');
// const authRoutes = require("./routes/auth.routes");
const transporter = require("./utils/mailer");
const app = express(); //instancia de express que vamos a utilizar en server.js

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));


db.authenticate()
.then(()=>console.log("base de datos autentificada"))
.catch((e)=> console.log(e));

db.sync({force: false})
.then(()=>console.log("base de datos sincronizada"))
.catch((e)=>console.log(e));


ecomerceRouter(app);
// app.use("/api/v1/auth",authRoutes);
module.exports = app;