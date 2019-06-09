var mongoose = require('mongoose');

var AuthorSchema = mongoose.Schema({
	name: { type: String },
	age: { type : Number }
	// String, Number
});

// console.log(BookSchema);

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author