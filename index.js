const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () =>{
    console.log(`Server running at http:/localhost:${port}`);
});

app.use(express.json());

app.get('/about', (req, res) =>{
    res.send('About US');
});