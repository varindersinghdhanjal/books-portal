const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
	//res.send('hello from root/');
	res.render('content');
})

router.get('/books', function(req,res){
	res.render('books/addbooks');
})

router.get('/authors', function(req,res){
	res.render('authors/addauthors');
})

router.get('/test', function(req,res){
	res.render('footer');
})


module.exports = router;