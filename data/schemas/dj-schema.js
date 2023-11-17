const mongoose = require('mongoose');

const djSchema = new mongoose.Schema(
{
    djId: String, // format: CH-DJ-00000000
    stageName:
    {
        type: String,
        required: true
    },
    firstLastName: String, // format: firstName lastName
    genrePreferences: [String], 
    bio: String,
    eventLineup: [String], // array of event ids
    djStatus: String, // active, inactive
    socials: [String], // array of social media names like spotify
    socialLinks: [String], // array of social media links
    location: [String], // [state, country]
    avatar: String,
    rating: Number,
    upcomingEventCount : Number
})

const dj = mongoose.model('dj', djSchema);
module.exports = dj;