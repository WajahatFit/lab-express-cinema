const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/movie/:movieId', async(req, res, next) =>{
    const {movieId} = req.body;
    try {
        const movie = await Movie.findById(movieId);
        res.render('movies-details', movie)
    } catch (error) {
        next(error)
    }
});