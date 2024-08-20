// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
	try {
		// read file synchronously
		const data = fs.readFileSync(path, 'utf8');

		// split data into lines & filter empty lines
		const lines = data.trim().split('\n').filter(line => line.length > 0);

		if (lines.length === 0) {
			throw new Error('Cannot load the database');
		}

		// extract headers & student data
		const headers = lines[0].split(',');
		const students = lines.slice(1);

		const fields = {}; // Object to store students by field

		// parse each student's data
		students.forEach(line => {
			const studentData = line.split(',');
			const firstName = studentData[0];
			const field = studentData[studentData.length - 1];

			if (fields[field]) {
				fields[field].push(firstName);
			} else {
				fields[field] = [firstName];
			}
		});

		// log total number of students
		console.log(`Number of students: ${students.length}`);

		// log number of students per field & their names
		for (const [field, names] of Object.entries(fields)) {
			console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
		}
	} catch (error) {
		throw new Error('Cannot load the database');
	}
}

module.exports = countStudents;
