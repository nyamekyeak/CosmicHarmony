const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(
{
    songId: String,
    songTitle: String,
    songLeadArtist: 
    {
        type: String,
        required: true
    },
    songFeaturedArtists: [String],
    songGenre: 
    {
        type: [String],
        required: true
    },
    songDuration: 
    {
        type: String,
        required: true,
        default: "__:__"
    },
    releaseYear: 
    {
        type: Number,
        min: 1860,
        max: 2023,
        default: 2023
    },
    songAlbum: 
    {
        type: String,
        default: "Unknown"
    },
    songSource: 
    {
        type: String,
        required: true
    },
    songLyrics: String,
    songAlbumCover: String,
})

const Song = mongoose.model('Song', songSchema);
module.exports = Song;