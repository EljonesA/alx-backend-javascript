const express = require('express');

const app = express();

// Define the root route '/'
app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
	console.log('Server listening on port 1245');
});

// Export the app
module.exports = app;
