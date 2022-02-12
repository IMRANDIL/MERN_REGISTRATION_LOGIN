const express = require('express');

require('dotenv').config();


const app = express();
const cors = require('cors');
const path = require('path')

require('../backend/db/connection');

const homeRouter = require('../backend/Router/router')

//MIDDLEWARES..
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs');


app.set('views', 'views');


app.use('/', homeRouter)




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on Port: ${PORT}😃`);
})