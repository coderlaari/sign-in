require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware JSON:in käsittelyyn
app.use(express.json());

// Serve the index.html manually
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Kirjautumisendpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'pass') {
        res.status(200).json({ message: 'Kirjautuminen onnistui!' });
    } else {
        res.status(401).json({ info: 'Virheellinen käyttäjänimi tai salasana' });
    }
});

// Käynnistä palvelin
app.listen(PORT, () => {
    console.log(`Palvelin käynnissä: http://localhost:${PORT}`);
});
