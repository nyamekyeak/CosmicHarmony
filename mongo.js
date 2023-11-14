const mongoose = require('mongoose');
const path = 'mongodb://localhost:27017/CosmicHarmny';

module.exports = async () => 
{
    await mongoose.connect(path, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    return mongoose;
}