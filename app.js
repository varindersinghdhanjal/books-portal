const express = require('express');
const app = express();
const path = ('path');
const exphbs = require('express-handlebars'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/books", { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', (error) => {
	console.log(error);
})

db.on('open', () => {
	console.log("Database Connected");
})

const indexRoutes =require('./routes/index.routes');
const apiRoutes = require('./routes/api.routes');
app.use(bodyParser());
app.use('/', indexRoutes);
app.use('/api', apiRoutes);

//app.get('/',function(req,res){
///res.send('hello from app.js')	
//})
app.use(express.static('public'));

app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.listen(3000,() => {
	console.log('server started at 3000 ...');
});