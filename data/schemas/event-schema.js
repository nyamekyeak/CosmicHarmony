const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
{
    id : 
    {
        type: String,
        required: true
    },
    title: 
    {
        type: String,
        required: true
    },
    description: String,
    genre : [String],
    playlist: 
    {
        type: [String],
        required: true
    },
    leadProducer: 
    {
        type: String,
        required: true
    },
    assistantProducer: String,
    dj: String,
    date: Date,
    startTime: String,
    endTime: String,
    duration: Number,
    eventStatus: String, //live, upcoming, ended, cancelled, rescheduled
    cover: String, // link to image
})

const event = mongoose.model('event', eventSchema);
module.exports = event;