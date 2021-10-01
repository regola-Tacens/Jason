require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./app/router');
const PORT = process.env.PORT || 5432;

app.use(express.urlencoded({
    extended: true
}));

app.use(router);
app.listen(PORT, ()=> {
    console.log(`Argoanutes sur le quai http://localhost:${PORT}`);
});