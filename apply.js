// Arguments are passed as an array or an array-like object to the function after the context  (this value)

function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person = { name: 'John' };
  
  // Using apply to invoke greet with person as the context and an array of arguments
  greet.apply(person, ['Hello']);
  // Output: Hello, John!

  

// Using apply with Arguments
function add(a, b) {
    console.log(`${this.name} added ${a} and ${b}, result: ${a + b}`);
  }
  
  const calculator = { name: 'Calculator' };
  
  // Using apply to invoke add with calculator as the context and an array of arguments [3, 4]
  add.apply(calculator, [3, 4]);
  // Output: Calculator added 3 and 4, result: 7

  

//Applying Methods with Inheritance
function Vehicle(type) {
    this.type = type;
  }
  
  function Car(type, brand) {
    Vehicle.apply(this, [type]); // Inheriting properties from Vehicle
    this.brand = brand;
  }
  
  const myCar = new Car('Sedan', 'Toyota');
  console.log(myCar); // Output: Car { type: 'Sedan', brand: 'Toyota' }

  


//Using apply with Functions that Expect Arrays
const numbers = [1, 2, 3];

function displayNumbers() {
  console.log(this);
  console.log(...arguments);
}

// Using apply to pass numbers as the context and an array of arguments to displayNumbers
displayNumbers.apply(numbers, ['These are the numbers:']);
// Output: [1, 2, 3] These are the numbers:

