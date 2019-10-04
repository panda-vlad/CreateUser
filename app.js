const express = require('express');
const app = express();
const router = require('./router')

const PORT = 3000;
const host = 'localhost';


app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    next();
});
console.log(333, router)
app.use(router);

app.listen(PORT, host, async () => {
    console.log('Running ' + PORT)
})