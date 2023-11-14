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
    songFearturedArtists: [String],
    songGenre: 
    {
        type: [String],
        required: true
    },
    songDuration: String,
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
    songSourceLink:
    {
        type: String,
        required: true
    }
})

const Song = mongoose.model('Song', songSchema);
module.exports = Song;