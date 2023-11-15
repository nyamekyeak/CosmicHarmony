const mongoose = require('mongoose');

const djSchema = new mongoose.Schema(
{
    djId: String,
    djName:
    {
        type: String,
        required: true
    },
    firstLastName: String,
    genrePreferences: [String], 
    djBio: String,
    eventLineup: [String], // array of event ids
    djStatus: String, // active, inactive
    djSocials: [String], // array of social media names
    d
}
)