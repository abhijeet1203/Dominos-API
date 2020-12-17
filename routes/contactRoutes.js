const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.status(200).json({
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    })
});

module.exports = router;