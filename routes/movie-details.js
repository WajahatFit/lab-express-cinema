const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/movie-details/:movieId', async(req, res, next) =>{

    try {
        const {movieId} = req.params;
        console.log(req.params)
        const movie = await Movie.findById(movieId);
        res.render('movie-details', movie)
        console.log(movie)
    } catch (error) {
        next(error)
    }
});


