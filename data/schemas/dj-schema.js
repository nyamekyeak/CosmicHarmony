const mongoose = require('mongoose');

const djSchema = new mongoose.Schema(
{
    djId: String,
    stageName:
    {
        type: String,
        required: true
    },
    firstLastName: String,
    genrePreferences: [String], 
    bio: String,
    eventLineup: [String], // array of event ids
    djStatus: String, // active, inactive
    socials: [String], // array of social media names like spotify
    socialLinks: [String], // array of social media links
    location: [String], // [state, country]
    avatar: String,
    rating: Number
})

const dj = mongoose.model('dj', djSchema);
module.exports = dj;