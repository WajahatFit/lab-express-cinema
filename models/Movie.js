const mongoose = require('mongoose');
 const { Schema } = mongoose;

 const movieSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String

 });


 const Movie = mongoose.model('Movie', movieSchema);

 module.exports = Movie;