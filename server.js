// Load Node modules
const express = require('express');
// Initialise Express
var app = express();

const port = 3000;
// Render static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/assets', express.static(__dirname + 'public/assets'));

app.set('views', './views');
app.set('view engine', 'ejs');

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) 
{
    res.render('pages/producerMain',
    {        
        pageTitle: "Producer Home", 
        heroHeader: "Producer Home", 
        heroCaption: "Welcome back Mr Producer, time to get to work!",
        heroImage: "assets/images/placeholderImages/placeholder3.jpg"
    });
});

app.get('/about', function (req, res)
{
    res.render('pages/about');
});

app.get('/stats', function (req, res)
{
    res.render('pages/stats', 
    {
        pageTitle: "Stats", 
        heroHeader: "Stats", 
        heroCaption: "Take a look at metrics generated over time.",
        heroImage: "assets/images/placeholderImages/placeholder3.jpg"
    });
});

app.get('/djpool', async function (req, res)
{
    console.log('Retrieving data from MongoDB');
    try {
      const collection = publicDataBase.collection('DJPool');
      const documents = await collection.find({}).toArray();
  
      if (documents.length > 0) {
        console.log('DJ Pool retrieved successfully');
        console.log(documents);
      } else {
        console.log('DJ Pool is empty');
      }
      const data = documents
      res.render('pages/djpool', 
      {
          pageTitle: "DJ Pool", 
          heroHeader: "DJ Pool", 
          heroCaption: "Browse our massive collection of DJs from all over the world",
          heroImage: "assets/images/placeholderImages/placeholder3.jpg",
          documents: documents
      });
    } catch (error) {
      console.error('Error retrieving data from MongoDB', error);
      res.status(500).send('Error retrieving data');
    }

});

app.get('/djPoolPopulate', async function (req, res) {
    console.log('Retrieving data from MongoDB');
    try {
      const collection = publicDataBase.collection('DJPool');
      const documents = await collection.find({}).toArray();
  
      if (documents.length > 0) {
        console.log('DJ Pool retrieved successfully');
        console.log(documents);
      } else {
        console.log('DJ Pool is empty');
      }
      const data = documents
      res.render('pages/djpool', { data: data }); // Make sure the variable name is correct here
    } catch (error) {
      console.error('Error retrieving data from MongoDB', error);
      res.status(500).send('Error retrieving data');
    }
});

app.get('/schedule', function (req, res)
{
    res.render('pages/schedule',
    {
        pageTitle: "Schedule", 
        heroHeader: "Schedule", 
        heroCaption: "View and manage upcoming programs and schedules",
        heroImage: "assets/images/placeholderImages/placeholder3.jpg"
    });
});

app.get('/library', function (req, res)
{
    res.render('pages/library',
    {
        pageTitle: "Library", 
        heroHeader: "Library", 
        heroCaption: "Browse our expansive collection of songs from all over the world",
        heroImage: "assets/images/placeholderImages/placeholder2.jpg"
    });

});
// Port website will run on
app.listen(port);


// Database connection
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // replace with your MongoDB connection string
const client = new MongoClient(uri);
var publicDataBase;

async function connectToMongoDB() 
{
  try 
  {
    await client.connect();
    console.log('Connected to MongoDB');
    publicDataBase = client.db('CosmicHarmony');
  } 
  catch (error) 
  {
    console.error('Failed to connect to MongoDB', error);
  }
}
module.exports =
{
    publicDataBase,
    connectToMongoDB
}
connectToMongoDB();