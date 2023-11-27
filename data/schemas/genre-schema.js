const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema(
{
    genreName: 
    {
        type: String,
        required: true
    },
    genreDescription:
    {
        type: String,
        required: true
    },
    genreCover:
    {
        type: String,
        required: true
    },
    songsInGenre: [String]
});

const genre = mongoose.model('genre', genreSchema);
module.exports = genre;