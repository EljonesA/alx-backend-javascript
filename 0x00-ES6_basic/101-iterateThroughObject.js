export default function iterateThroughObject(reportWithIterator) {
	// Initialize an empty array to collect employee names
	const employees = [];

	// Iterate through the iterator and collect employee names
	for (const employee of reportWithIterator) {
		employees.push(employee);
	}

	// Join the array of employee names with ' | ' separator
	return employees.join(' | ');
}
