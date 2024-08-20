const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true);

	if (parsedUrl.pathname === '/') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello Holberton School!');
	} else if (parsedUrl.pathname === '/students') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.write('This is the list of our students\n');

		const databasePath = process.argv[2];

		countStudents(databasePath)
			.then(() => {
				res.end();
			})
			.catch((err) => {
				res.end(`${err.message}\n`);
			});
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Not Found');
	}
});

app.listen(1245, () => {
	console.log('Server listening on port 1245');
});

module.exports = app;
