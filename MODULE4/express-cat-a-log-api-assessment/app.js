const express = require('express');
const cors = require('cors');
const catsController = require('./controllers/catsController');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/cats', catsController);

app.get('*', (req, res) => {
    res.status(404).json({
        success: false, 
        payload: 'Page not found'
    });
});

module.exports = app;