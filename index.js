const express = require('express');
const app = express();
const router = require('./app/router');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(router);
app.listen(PORT, ()=> {
    console.log(`Argoanutes sur le quai http://localhos:${PORT}`);
});