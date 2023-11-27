const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
{
    id : 
    {
        type: String,
        required: true
    },
    eventName: 
    {
        type: String,
        required: true
    },
    description: String,
    genre : [String],
    playlist: String, // id for playlist
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
    eventRuntime:
    {
        type: Number,
        min: 1,
        max: 3,
        default: 1
    },
    eventStatus: String, //live, upcoming, ended, cancelled, rescheduled
    cover: String, // link to image
})

const event = mongoose.model('event', eventSchema);
module.exports = event;