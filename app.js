const express = require('express');
const welcome = require('./routes/welcomeRoutes');
const contact = require('./routes/contactRoutes');
const app = express();
const port = 3000;

app.use('/', welcome);
app.use('/', contact);

app.get('*', (req, res) => {
    res.status(404).send('Page not found...');
});

app.listen(port, err => {
    console.log(`Listening to port ${port}`);
});