console.log('Hello World');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What's your name? ", nosheena riaz => {
  if(!nosheena riaz.trim()) {
    console.log("You didn't enter a name!");
  } else {
    console.log(`Hello, ${nosheena riaz}!`);
  }
  readline.close();
});
