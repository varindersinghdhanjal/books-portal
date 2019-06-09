const express = require('express');
const router = express.Router();

var booksRouter = require('./books.routes');
var authorRoutes = require('./author.routes');

// router.use('*', (req, res, next) => {
// 	console.log("Middleware");
// 	return res.status(400).json({message : "Done"});
// })

router.use('/books', booksRouter);
router.use('/authors', authorRoutes);

module.exports = router;