import readDatabase from '../utils.js';

class StudentsController {
	static async getAllStudents(req, res) {
		try {
			const students = await readDatabase(process.argv[2]);
			let response = 'This is the list of our students\n';
			const fields = Object.keys(students).sort();

			fields.forEach((field) => {
				response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
			});

			res.status(200).send(response.trim());
		} catch (err) {
			res.status(500).send(err.message);
		}
	}

	static async getAllStudentsByMajor(req, res) {
		const { major } = req.params;

		if (major !== 'CS' && major !== 'SWE') {
			return res.status(500).send('Major parameter must be CS or SWE');
		}

		try {
			const students = await readDatabase(process.argv[2]);
			if (students[major]) {
				const list = students[major].join(', ');
				res.status(200).send(`List: ${list}`);
			} else {
				res.status(200).send('List: ');
			}
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
}

export default StudentsController;
