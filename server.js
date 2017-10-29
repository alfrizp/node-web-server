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

app.listen(3000);
