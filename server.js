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
    })
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

app.get('/djpool', function (req, res)
{
    res.render('pages/djpool', 
    {
        pageTitle: "DJ Pool", 
        heroHeader: "DJ Pool", 
        heroCaption: "Browse our massive collection of DJs from all over the world",
        heroImage: "assets/images/placeholderImages/placeholder3.jpg"
    });
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
