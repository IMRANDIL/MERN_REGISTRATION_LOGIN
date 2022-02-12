const express = require('express');

require('dotenv').config();


const app = express();
const cors = require('cors');
const path = require('path')

require('./db/connection')

const homeRouter = require('./Router/router')

//MIDDLEWARES..
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))





app.use('/', homeRouter)


app.get('*', (req, res) => {
    return res.send(`<h1 style="text-align:center">Oops..!! You lost the path.</h1><a href="https://client-zeta-indol.vercel.app/" style="color:red; text-decoration:none" target="_blank">Back to App</a>`)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on Port: ${PORT}😃`);
})