var express = require('express');
var router = express.Router();
const Book = require('../models/book.model');

router.get('/', (req, res) => {
	Book.find().then((result) => {	
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

	Book.findById(book).then((result) => {
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

module.exports = router;