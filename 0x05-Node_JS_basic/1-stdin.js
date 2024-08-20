// user input

console.log("Welcome to Holberton School, what is your name?");

// user input
process.stdin.on('data', (data) => {
	const name = data.toString().trim(); // Trim any extra spaces/newlines
	console.log(`Your name is: ${name}`);
	process.exit();
});

// handle process exit
process.on('exit', () => {
	console.log("This important software is now closing");
});
