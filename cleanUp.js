// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
  // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// function nameQuestion() {
//   console.log("Hello, what is your name?")
// }

// nameQuestion()



function nameQuestion(name) {
  console.log("Hello, what is your name?");
  console.log(`Hello, my name is ${name}`);
  console.log(`Nice to meet you, ${name}`);
}

nameQuestion("Parvin")

// //  --> Declared parameter `name` in function definition.
// //  --> Add interpolation `${name}` in `console.log` and in function call as argument.
// //  --> Add two more `console log`.


// EX 2:

// function addThreeNums(first, second, third) {
// var sum = first + second + third
// console.log(sum);
//       }

// addThreeNums(1, 2, 3);
// addThreeNums(4, 2, 7);



function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log (`${sum} is the answer`);
      }
  
  addThreeNums(1, 2, 3)
  addThreeNums(4, 2, 7);

// //  --> Add interpolation `${sum}` and a text in `console.log`


// // EX 3:

// func makeFreshPesto(){
//   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
//   console.log("Pulse basil and pine nuts");
//   console.log("Add garlic and cheeses");
//   console.log("Slowly pour in oil");
//   console.log("Season");    }

// makeFreshPesto();



function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

// //  --> function was misspelled. corrected from func to function.


//  EX 4:
// function average(num1, num2) 
//   {
// var sum = num1 + num2;
//     var avg = sum / 2;

//   console.log(`the average is: ${avg}`.)
//   }



function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`)
  }
average(5,6)

// //  --> add Function Call (or Invoke) and moved the dot incide the backtick in console.




