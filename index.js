require('dotenv').config();

const cors = require('cors');

const express = require('express');
const app = express();
const router = require('./app/router');
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({
    extended: true
}));
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(router);
app.listen(PORT, ()=> {
    console.log(`Argoanutes sur le quai http://localhost:${PORT}`);
});