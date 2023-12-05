//Use bind when You want to create a new function with a fixed context and, optionally, some initial arguments.
//You plan to invoke the function later, and you want to partially apply arguments.



function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person = { name: 'John' };
  
  // Using bind to create a new function with person as the context
  const greetJohn = greet.bind(person);
  
  // Invoking the bound function later
  greetJohn('Hello');
  // Output: Hello, John!

  

//Using bind with Arguments
function add(a, b) {
    console.log(`${this.name} added ${a} and ${b}, result: ${a + b}`);
  }
  
  const calculator = { name: 'Calculator' };
  
  // Using bind to create a new function with calculator as the context and initial arguments 3 and 4
  const addWithCalculator = add.bind(calculator, 3, 4);
  
  // Invoking the bound function later
  addWithCalculator();
  // Output: Calculator added 3 and 4, result: 7

  

//Partial Application
function multiply(a, b, c) {
    return a * b * c;
  }
  
  // Using bind to create a new function with a specific context and partially applying arguments
  const multiplyByTwo = multiply.bind(null, 2);
  
  // Invoking the partially applied function later
  const result = multiplyByTwo(3, 4);
  console.log(result); // Output: 24
  