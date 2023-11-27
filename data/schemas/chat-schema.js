const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
{
    message : 
    {
        type: String,
        required: true
    },
    senderId : String,
    recipientId : String,
    timestamp : Date
});

const chatSchema = new mongoose.Schema(
{
    chatId : String,
    messages : 
    {
        type: [messageSchema],
    } 
});

const chat = mongoose.model('chat', chatSchema);
module.exports = chat