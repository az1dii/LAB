/////////////////////////////////////////////////////////////////////
//printGreeting
// Write a function called printGreeting with a parameter namethat returns a greeting with the argument interpolated into the greeting.


// const printGreeting = name => {
//     return "Hello There," + name

// }
// console.log(printGreeting("Slimer"));


/////////////////////////////////////////////////////////////////////
// reverseWordOrder
// Write a function reverseWordOrderthat accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.


// const reverseWordOrder = (string) => {
//     return ((string.split (" ")).reverse()).join(" ")
// }
// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));



/////////////////////////////////////////////////////////////////////
// calculate
// Write a function called calculate.

// This function should take three arguments, two numbers and a string.

// Name the parameters num1, num2, and operation.

// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).



///////////////////////////////////////////////////
// Build a Tamagotchi
// What is a tamagotchi? According to wikipedia, the name is a portmanteau combining the Japanese word tamago (たまご), which means "egg", and the English word "watch". Most Tamagotchi characters' names end in tchi (っち) in Japanese, with few exceptions.

// properties - 
// states - boolean
// behaviors - function

 const tamagotchi = {
     name: "Yoshi",
     weight: " 30lbs",
     age: "10",
     birthday: "Jan,1,2010",
     description: "turtle",
     hungerLevel: "full",
     happinessLevel: "happy",
     attentionLevel: "low",
     lifeStage: "child"
 }

 console.log(tamagotchi)