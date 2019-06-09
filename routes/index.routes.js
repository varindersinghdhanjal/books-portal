const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');
const Author = require('../models/author.model');

router.get('/', function(req,res){
	//res.send('hello from root/');
	res.render('content');
})

router.get('/books', function(req,res){
	Book.find().then((result) => {
		res.render('books/addbooks', {
			data: result
		});
	})
})

router.get('/authors', function(req,res){
	Author.find().then((result) => {
		res.render('authors/addauthors', {
			data: result
		});
	})
})

router.get('/test', function(req,res){
	res.render('footer');
})

module.exports = router;