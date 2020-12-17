const express = require('express');
const router = express.Router();

router.get('/welcome', (req, res) => {
    res.status(200).send('Welcome to Dominos!');
});

module.exports = router;