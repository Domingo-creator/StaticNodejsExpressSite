const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
    //res.send('<h1> I made it to About!</h1>');
});

router.get('/randomQuoteGenerator', (req, res) => {
    res.render('randomQuoteGenerator');
});

router.get('/paginationAndFiltering', (req, res) => {
    res.render('paginationAndFiltering');
});

router.get('/interactiveForm', (req, res) => {
    res.render('interactiveForm');
});

router.get('/OOPGameShow', (req, res) => {
    res.render('OOPGameShow');
});

router.get('/PublicAPIRequest', (req, res) => {
    res.render('PublicAPIRequest');
});


module.exports = router;