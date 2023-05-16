let floor = 0; // Initialize the floor variable to 0

// Read the string of instructions from the user

const instructions = prompt("Enter the string of instructions: ");

// Iterate through each character in the string 

for (let i = 0; i < instructions.length; i++) { const instruction = instructions.charAt(i);

// Check the instruction and update the floor variable accordingly

if (instruction === "<") { floor++; // Increment the floor variable by 1 } else if (instruction === ">") { floor--; // Decrement the floor variable by 1 } }

// Print the final value of the floor variable

console.log("Final Floor:", floor);
