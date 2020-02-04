const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));


// hoem route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});

// about route:
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

// gallery route:
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});


// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});