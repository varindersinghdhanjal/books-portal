var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
	name: { type: String },
	author: { type : String },
	copiesSold : { type: Number }
	// String, Number
});

// console.log(BookSchema);

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;