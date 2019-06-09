var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
	name: { type: String },
	// name: String,
	// String, Boolean, Number, Date, Array, Object
	author: { 
		type : mongoose.Types.ObjectId, 
		ref: 'Author' 
	},
	copiesSold : { type: Number },
	names: [{
		name: String,
	}],
	publishingDate : { type: Date, default: Date.now }
});

// console.log(BookSchema);

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;