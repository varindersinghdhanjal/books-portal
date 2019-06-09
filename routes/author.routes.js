var express = require('express');
var router = express.Router();
const Author = require('../models/author.model');


router.get('/', (req, res) => {
	Author.find().then((result) => {	
		res.json({
			data: result
		})
	})	
})


router.get('/:authorId', (req, res) => {
	var author = req.params.authorId;

	// Book.find({ _id: book }).then((result) => {	
	// 	res.json({
	// 		data: result
	// 	})
	// })	

	Author.findById(author).then((result) => {
		res.json({
			data: result
		})
	})

})

router.post('/', (req, res) => {
	var authorData = req.body;

	// var book = new Book(bookData);

	// book.save().then((result) => {
	// 	res.json({result})
	// })

	Author.create(authorData).then((result) => {
		res.json({result})
	})

})

router.put('/:authorId', (req, res) => {
	var body = req.body;
	var authorId = req.params.authorId;

	Book.findByIdAndUpdate(authorId, body, {new: true}).then((result) => {
		res.json({result});
	})

	// Book.findOneAndUpdate({ name: 'this'}, body, {new: true, upsert: true}).then((result) => {
	// 	res.json({result});
	// })
});

router.delete('/:authorId', (req, res) => {
	var authorId = req.params.authorId;
	Book.findByIdAndRemove(authorId).then((result) => {
		res.json({result});
	})
})

module.exports = router;