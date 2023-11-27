const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema(
    {
        playlistId: String,
        playlistTitle: String,
        playlistDescription: String,
        playlistGenreScope: [String],
        playlistCover:
        {
            type: String,
            required: true,
            default: "public/assets/images/placeholderImages/placeholder2.jpg" 
        },
        creatorId : String,
        duration : Number,
        songCount : Number,
        songs: [String]
    },
    { collection : "PlaylistPool" }
)

const playlist = mongoose.model('playlist', playlistSchema);
module.exports = playlist