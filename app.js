const express = require('express');
const app = express();
const path = ('path');
const exphbs = require('express-handlebars'); 

const indexRoutes =require('./routes/index.routes');
app.use('/', indexRoutes);

//app.get('/',function(req,res){
///res.send('hello from app.js')	
//})
app.use(express.static('public'));

app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.listen(3000,() => {
	console.log('server started at 3000 ...');
});