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
    res.render('pages/producerMain');
});
// Port website will run on
app.listen(port);
