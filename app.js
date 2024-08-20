const express = require('express');
const path = require('path')

const canvas = require('canvas');
const faceapi = require('face-api.js');

const app = express();
const port = 3000;
const host = 'localhost';

const viewsDir = path.join(__dirname, 'views');
app.use(express.static(viewsDir));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(port, host, () => {
    console.log(`App running on ${host}:${port}`)
})
