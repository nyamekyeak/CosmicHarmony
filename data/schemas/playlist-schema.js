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
        duration : Number
    }
)

const playlist = mongoose.model('playlist', playlistSchema);
module.exports = playlist