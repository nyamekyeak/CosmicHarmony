const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema(
    {
        producerId: String,
        producerName:
        {
            type: String,
            required: true
        },
        producerBio: String,
        producerStatus: String, // active, inactive
        socials: [String], // array of social media names like spotify
        socialLinks: [String], // array of social media links
        location: [String], // [state, country]
        avatar: String,
        programLineup: [String], // array of event ids
        playlistsCreated: [String], // array of playlist ids
        contacts: [String], // array of contact ids
        chats: [String] // array of chat ids
    }
)