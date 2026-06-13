// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


// A1.
const number1 = 100; // Declare a variable using const and assign it the number 100.
let number2 =45; // Declare a variable using let and assign it the number 45.
// Log both.
console.log(number1)
console.log(number2)


// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
let result = (((number1+number2) - 20)*2)/5
console.log(result)
// Log the result.


// A3.

// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
number2 = 20; 
console.log(number2) //replaces new value
//number1 = 20;
// console.log(number1) //error, reassigment to const variable

// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer: let allows you to reassign value of variable,
// meanwhile, const attaches to the inital given value, cannot replace 


// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
let number3 = 47
if(number3%2==0) {
  console.log("is even")
} else {
  console.log("is odd")
}

console.log(number3)


// Log the result and a message that says "even" or "odd".
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer: % checks for even or odd. returns reminder. if 1,odd 0,













// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
console.log(rawInput.trim())

// B2.
// Log the string converted to all lowercase.
console.log(rawInput.trim().toLocaleLowerCase())

// B3.
// Log the number of characters in rawInput (including spaces).
console.log(rawInput.length)

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.

// //update to lowercase
// rawInput = rawInput.toLocaleLowerCase()//rawInput.toLocaleLowerCase()
// //  will not work by itself, you need to resave in same variable
// // for update
// WILL NOT WORK BECAUSE RAW IS CONST


// DO DIRECTLY IN CONSOLE.LOG
console.log(rawInput.toLowerCase().includes("awesome"))


// B5.
// Log the first 10 characters of rawInput.
// SLICE show characters, start & end
// INDEXING LIKE ARRAYS
console.log(rawInput.trim().slice(0,11))




// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
// SPLIT PLACES INSIDE ARRAY
console.log(rawInput.trim().split())
//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: SPLIT PLACES INSIDE ARRAY, it passed the value stored in rawInput






// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
console.log(scores[0])
// INDEX OF SCORE. ALL ELEMENTS MINUS 1 (WILL GIVE ME LAST)
console.log(scores[scores.length-1])

// C2.
// Log the total number of scores we see in the array.
for(let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

console.log(" _____")

// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array
scores.push(78)
console.log(scores)


// C4.
// Use a method to log the index of the score 95.
// Log the index.
console.log(scores.indexOf(95))


// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.

//INCLUDES AUTOMATICALLY RETURN TRUE OR FALSE
console.log(scores.includes(50))



// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.

for(let i =0; i < scores.length; i++) {
  console.log("In: " + i)
  console.log(scores[i])
}

console.log("____")


// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
// score is temp variable that represent each value in array scores

scores.forEach(score => {
  console.log(score)
})



console.log("_____")

// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.

// score is temp variable
//represents each element in array
scores.filter(score => {
  //CREATES AN STORE IN ARRAY IF PASS TEST
  if(score > 80) {
  console.log(score)
  }
})



console.log("____")

// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
//
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer: FILTER -> NEED TO MATCH CONDITION (MAY NOT BE ALL ELEMENT)
                  //MAP -> CHANGES ALL ELEMENTS


scores.map(score=>{

  //remeber, to update value rewritre variable an then =
score = score*2
console.log(score)


})







// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.

//cannot restore in another variable
console.log(student.name)


//can restore in another variable
console.log(student["city"])



// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.

student.grade = "B+"
console.log(student)


console.log("////")

// D3.
// Use a method to log all of the keys in the object.

// PRINTS ALL KEYS FROM OBJECT
// KEYS = variable name
//METHOD
console.log(Object.keys(student))



// D4.
// Use a method to log all of the values in the object.

console.log(Object.values(student))



console.log("////")

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)

//go through each key
for(let key in student) {
  
console.log(key + ": " + student[key])
}
// COULD HAVE WORKED IF USED VALUE INSTEAD OF KEY TOO


// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer:

console.log("///")

console.log(student.name)
console.log(student["name"])

console.log("___")

// IF YOU EVER NEED [], MUST USE " "
// OTHERWISE WONT WORK. YOUD NEED TO REASSIGN VALUE LIKE

let n = "name"
console.log(student[n])










// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]

console.log('___')
// E1.
// Log the name of the third student.

console.log(roster[2].name);


console.log("////")

// E2.
// Using forEach, log the name of every student who is present.

roster.forEach(student => {
if(student.present=== true) {
  console.log(student.name)
}
})

console.log("///")

// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.


roster.filter(student => {
  if(student.grade >=70) {
    let result1 = student.name
    let result2 = student.grade
    console.log(result1, result2)
    

  }
})

// //new array
// const pass = roster.filter(student =>
//   student.grade >= 70
// )

// pass.forEach(student => {
//   console.log(student.name, student.grade)
// })



console.log("__")
// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.

let stu = roster.filter(names =>{
  console.log(names.name)
})

stu.forEach( n => {
  console.log(n)
})





// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer:




// to have several objects of same type inside array
// access more of one value









// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")


// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//
function greet(name) {
  return "Hello " + name
}


console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"


// F2.
// Write a function called square that takes a number and returns its square.
//

function square(number) {
  return number*number
}



console.log(square(4))   // → 16
console.log(square(9))   // → 81
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: its like console.log
  // returns nothing


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.

function isEven(number) {
  if(number%2===0) {
    return true
  } else {
    return false
  }
}
//
console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true


// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//


console.log("/__")


function sum(arr) {
  let sum = 0
  for(let i = 0;i < arr.length;i++) {
    sum+= arr[i]

  }
  return sum
 
}

console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0


// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//

function myForEach(arr, callback) {

  for(let i = 1; i< arr.length;i++ ) {
      callback(arr[i])
  }

}
// assumes callback is a function


myForEach([1, 2, 3], function(n) {
  console.log(n)
})
// make function behave right there 



// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer: calls behavior of function given


// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//

function myMap(arr, callback) {
let newarr = []
let result 

// for every element in my arra. do whatever you want (callback)
//then push my elements inside newarr

  for(let i = 0; i < arr.length; i++) {
    // store in result. cant directly use push here yet
    result = callback(arr[i])
    newarr.push(result)
  }

  return newarr

}


console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]


// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
let newarr = []
let res
function myFilter(arr, callback) {

 for(let i = 0; i < arr.length; i++) {
    // store in result. cant directly use push here yet
    res = callback(arr[i])
    newarr.push(res)
}
return res
}



console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer: it gets similae thing but behavior of function is diferent
