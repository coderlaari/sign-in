// DO NOT USE
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'pass') {
        res.status(200).json({ message: 'Successfully signed in!' });
    } else {
        res.status(401).json({ info: 'Incorrect username or password!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server ready: http://localhost:${PORT}`);
});
