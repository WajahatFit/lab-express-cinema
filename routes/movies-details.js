const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/movie/:movieId', async(req, res, next) =>{
    const {movieId} = req.params;
    try {
        const movie = await movies.findById(movieId);
        res.render('movies-details', movie)
        res.json(movie)
    } catch (error) {
        next(error)
    }
});