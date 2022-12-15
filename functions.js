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

function postedJob(value1, value2, company) {
var div = value2 - value1;
console.log(`Job post for a position in ${company}. The pay range is: $ ${div}`);
}
postedJob(90000, 110000, "EchoStar");


// 4: Write a function that satifies the following interaction pattern:

// checkStock(4, "Coffee");
// => "Coffee is stocked"

// checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(num, product) {
  if(num >= 4){
    console.log(`${product} is stocked`);
  } else if(num <=4){
    console.log(`${product} - running LOW`);
  } else if(num ===0){
    console.log(`${product} - OUT of stock!`);
  } else {console.log()}
  }

checkStock("4", "Cofee")
checkStock("3", "Tortillas");
checkStock("0", "Cheese");
checkStock("1", "Salsa");

