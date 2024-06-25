export default function createIteratorObject(report) {
	// Extract all employees from the report object
	const departments = Object.values(report.allEmployees);

	// Flatten the array of arrays into a single array of employees
	const allEmployees = departments.reduce((acc, employees) => {
		return [...acc, ...employees];
	}, []);

	// Return an iterator that yields each employee
	let index = 0;
	const iterator = {
		next() {
			if (index < allEmployees.length) {
				return { value: allEmployees[index++], done: false };
				} else {
					return { done: true };
				}
			}
		};

		// Symbol.iterator method to make the object iterable
		iterator[Symbol.iterator] = function() {
			return this;
		}
	
	return iterator;
}
