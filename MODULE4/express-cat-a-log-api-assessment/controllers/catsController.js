const cats = require('express').Router();
// const app = require('../app');
const catsArr = require('../models/cat');

cats.get('/', (req, res) => {
    res.json({ 
        payload: catsArr, 
        success: true
    });
});

cats.post('/', (req, res) => {
    const { designer, age, latestPiece, price } = req.body;
    if (designer && age && latestPiece && price) {
        catsArr.push(req.body);
        res.json({
            success: true, 
            payload: req.body
        }); 
    } else {
        res.status(422).json({
            success: false, 
            payload: 'Must include all required.'
        });
    }
});

cats.get('/:idx', (req, res) => {
    const weHaveACat = catsArr[req.params.idx];
    if (weHaveACat) {
        res.json({
            success: true,
            payload: weHaveACat
        });
    } else {
        res.redirect('/404');
    }
});

cats.put('/:idx', (req, res) => {
    const newCat = req.body;
    const existingCat = catsArr[req.params.idx];
    if (existingCat) {
        catsArr[req.params.idx] = newCat;
        res.json({
            success: true, 
            payload: newCat
        }); 
    } else {
        res.redirect('/404');
    }
});

cats.delete('/:idx', (req, res) => {
    const { idx } = req.params;
    const existingCat = catsArr[idx];
    if (existingCat) {
        catsArr.splice(idx, 1);    
        res.json({
            success: true, 
            payload: existingCat
        });

    } else {
        res.redirect('/404');
    }
});



module.exports = cats;