const fs = require('fs');

function countStudents(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf-8', (err, data) => {
			if (err) {
				reject(new Error('Cannot load the database'));
			} else {
				const lines = data.split('\n').filter((line) => line.trim() !== '');
				const headers = lines[0].split(',');
				const students = lines.slice(1).map((line) => {
					const values = line.split(',');
					return headers.reduce((obj, header, index) => {
						obj[header.trim()] = values[index].trim();
						return obj;
					}, {});
				});

				const totalStudents = students.length;
				console.log(`Number of students: ${totalStudents}`);

				const fields = {};
				students.forEach((student) => {
					const field = student.field;
					if (!fields[field]) {
						fields[field] = [];
					}
					fields[field].push(student.firstname);
				});

				for (const [field, names] of Object.entries(fields)) {
					console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
				}

				resolve();
			}
		});
	});
}

module.exports = countStudents;
