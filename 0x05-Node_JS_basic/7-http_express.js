const express = require('express');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Route for root path
app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

// route for /students path
app.get('/students', (req, res) => {
	const databasePath = process.argv[2];
	res.write('This is the list of our students\n');

	countStudents(databasePath)
		.then((output) => {
			res.end(output);
		})
		.catch((err) => {
			res.end(err.message);
		});
});

// start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});


module.exports = app;
