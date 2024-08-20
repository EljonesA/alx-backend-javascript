import fs from 'fs/promises';

async function readDatabase(filePath) {
	try {
		const data = await fs.readFile(filePath, 'utf-8');
		const lines = data.trim().split('\n').slice(1);
		const students = {};

		lines.forEach((line) => {
			const [firstname, , , field] = line.split(',');
			if (field && field.trim()) {
				if (!students[field]) students[field] = [];
				students[field].push(firstname);
			}
		});

		return students;
	} catch (err) {
		throw new Error('Cannot load the database');
	}
}

export default readDatabase;
