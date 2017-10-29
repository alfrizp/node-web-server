const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Alif Rizki Pambudi',
        likes: [
            'Coding',
            'Reading',
            'Exploring something new'
        ]
    });
})

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'This is error handling page'
    });
});

app.listen(3000);
