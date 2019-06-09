var express = require('express');
var router = express.Router();
const Book = require('../models/book.model');
const Author = require('../models/author.model');

router.get('/', (req, res) => {
	Book.find().populate('author').then((result) => {	
		res.json({
			data: result
		})
	})
})


router.get('/:bookId', (req, res) => {
	var book = req.params.bookId;

	// Book.find({ _id: book }).then((result) => {	
	// 	res.json({
	// 		data: result
	// 	})
	// })


	// Book.findById(book).then((result) => {
	// 	var book = result;
	// 	var authorId = book.author;

	// 	Author.findById(authorId).then((author) => {
	// 		console.log(author);

	// 		book.author = author;
			
	// 		res.json({
	// 			data: book
	// 		})
	// 	});

	// })

	Book.findById(book).populate('author').then((result) => {
			
		res.json({
			data: result
		})

	})



})

router.post('/', (req, res) => {
	var bookData = req.body;

	// var book = new Book(bookData);

	// book.save().then((result) => {
	// 	res.json({result})
	// })

	Book.create(bookData).then((result) => {
		res.json({result})
	})

})

router.put('/:bookId', (req, res) => {
	var body = req.body;
	var bookId = req.params.bookId;

	Book.findByIdAndUpdate(bookId, body, {new: true}).then((result) => {
		res.json({result});
	})

	// Book.findOneAndUpdate({ name: 'this'}, body, {new: true, upsert: true}).then((result) => {
	// 	res.json({result});
	// })
});

router.delete('/:bookId', (req, res) => {
	var bookId = req.params.bookId;
	Book.findByIdAndRemove(bookId).then((result) => {
		res.json({result});
	})
})

router.post('/:bookId/entries', (req, res) => {
	var bookId = req.params.bookId;
	var entry = req.body;
	Book.findById(bookId).then((book) => {
		book.entries.push(entry);
		book.save().then((result) => {
			res.json({book});	
		});
		// res.json({result});
	})
});

module.exports = router;