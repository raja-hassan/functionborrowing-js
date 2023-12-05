//Use call when to immediately invoke a function with a specific context and individual arguments.
// Arguments are passed to the function individually after the context  (this value)

function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person = { name: 'John' };
  
  // Using call to invoke greet with person as the context
  greet.call(person, 'Hello');




// Using call with Arguments
function add(a, b) {
    console.log(`${this.name} added ${a} and ${b}, result: ${a + b}`);
  }
  
  const calculator = { name: 'Calculator' };
  
  // Using call to invoke add with calculator as the context and arguments 3 and 4
  add.call(calculator, 3, 4);




  // Inheriting Methods
  function Vehicle(type) {
    this.type = type;
  }
  
  function Car(type, brand) {
    Vehicle.call(this, type); // Inheriting properties from Vehicle
    this.brand = brand;
  }
  
  const myCar = new Car('Sedan', 'Toyota');
  console.log(myCar); // Output: Car { type: 'Sedan', brand: 'Toyota' }

  


//Borrowing Methods
const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function introduce(age) {
  console.log(`Hi, I'm ${this.name} and I'm ${age} years old.`);
}

// Using call to borrow the introduce method for different objects
introduce.call(person1, 25);
// Output: Hi, I'm Alice and I'm 25 years old.

introduce.call(person2, 30);
// Output: Hi, I'm Bob and I'm 30 years old.


  



  
//Using call with Functions that Expect this
const numbers = [1, 2, 3];

function displayNumbers() {
  console.log(this);
  console.log(...arguments);
}

// Using call to pass numbers as the context and arguments to displayNumbers
displayNumbers.call(numbers, 'These are the numbers:');
// Output: [1, 2, 3] These are the numbers:
