var mongoose = require('mongoose');

var AuthorSchema = mongoose.Schema({
	name: { type: String },
	age: { type : Number },
	// book: {
	// 	type: mongoose.Types.ObjectId,
	// 	ref: 'Book'
	// }
	entries: [{ name: String, email: String }]
	// String, Number
});

// console.log(BookSchema);

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author