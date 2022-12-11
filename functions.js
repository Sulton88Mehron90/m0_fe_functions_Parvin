// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting(name) {
    console.log(`Hello ${name}`);
  }
  
  printGreeting("Parvin")
  printGreeting("Sulton")
  printGreeting("Mehron")


// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function argument(num1, num2){
var sum = num1 + num2;
    console.log(`${sum} is the answer`);
}
argument(2, 2)
argument(1, 1)

// 3: Write a function that has 3 parameters: a string and two numbers. 
// The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. 
// The function should print out a sentence that includes the name of the company and the range itself 
// (if the numbers passed in are 90000 and 110000, the pay range is 20000).

// => The basic formula of average is the sum of all the values divided by the total number of values.

function postedJob(Value1, Value2, EchoStar) {

var numberOfValue = 2
var sum = Value1 + Value2;
var div = sum /= numberOfValue;

console.log(`Job post for a position in EchoStar company. The minimum and maximum of a pay range for a posted job are 
${Value1} and ${Value2}. The pay range is: $ ${div}`);

}

postedJob(70000, 110000);


// 4: Write a function that satifies the following interaction pattern:

// checkStock(4, "Coffee");
// // => "Coffee is stocked"

function checkStock(num, Coffee) {
console.log("Coffee is stocked");
}
checkStock("4")

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

function checkStock (num, Tortillas) {
console.log("Tortillas - running LOW")
}
checkStock(3);

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

function checkStock(num, Cheese){
console.log("Cheese - OUT of stock!");
}
checkStock(0);

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"

function checkStock(num, Salsa){
console.log("Salsa - running LOW");
}
checkStock(1);

