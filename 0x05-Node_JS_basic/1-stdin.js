// user input

console.log("Welcome to Holberton School, what is your name?");

// user input
process.stdin.on('data', (data) => {
	const name = data.toString().trim(); // Trim any extra spaces/newlines
	console.log(`Your name is: ${name}`);
	
	// Close the input stream if input was piped
	process.stdin.end();
});

// handle process exit
process.stdin.on('end', () => {
	console.log("This important software is now closing");
});
