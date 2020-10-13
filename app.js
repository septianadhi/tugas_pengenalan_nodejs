//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();
//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));
//route untuk halaman home
app.get('/',(req, res) => {
//render file form.hbs
res.render('form');
});
//route untuk halaman about
app.get('/about',(req, res) => {
res.send('This is about page');
});
app.listen(8006, () => {
console.log('Server is running at port 8006');
});