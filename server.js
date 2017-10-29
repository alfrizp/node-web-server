const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

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

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
