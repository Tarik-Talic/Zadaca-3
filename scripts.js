//1. Print all even numbers from 0 – 10

// for (i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " is even")
//   }
// }

//2. Print a table containing multiplication tables

// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + "=" + i * j)
//   }
// }

//3. Create a length converter function

// var kilometri = prompt("Enter value in Kilometers")
// var milje = 0.621371

// function konverter() {
//   var rezultat = kilometri * milje
//   return rezultat
// }
// var konvertovano = konverter()
// alert(konvertovano)

//4. Calculate the sum of numbers within an array

// var evenNumbers = [2, 4, 6, 8, 10]
// var oddNumbers = [1, 3, 5, 7, 9]
// var negativeNumbers = [-2, -5, -8]

// function sumArray() {
//   var sum = 0
//   for (let i = 0; i < evenNumbers.length; i += 1) {
//     sum += evenNumbers[i]
//   }
//   return sum
// }
// console.log(sumArray(evenNumbers[(2, 4, 6, 8, 10)]))

//5. Create a function that reverses an array

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.reverse());

// function revArr(i) {
//   i.reverse();
//   return i.reverse();
// }

// console.log(revArr(numbers));

// Zadatak 6 Sort an array from lowest to highest

// var numbers = [2, -4, 50, 1.3, 44, 78, 255, -2, -66, 1, -44];
// console.log(
//   numbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// function lowTohigh(i) {
//   i.sort();
//   return i.sort(function (a, b) {
//     return a - b;
//   });
// }
// console.log(lowTohigh(numbers));

//7. Create a function that filters out negative numbers

// var allNum = [2, -86, 23, -11, -98, 43, -9, 7, 32, -12];

// const removeNegNums = (el) => {
//   return Number.isInteger(el) && el > 0;
// };

// console.log(allNum.filter(removeNegNums));

// 8. Remove the spaces found in a string

// var sentence = "This a string without any spaces between words";
// function removeSpaces(str) {
//   let noSpaces = str.split(" ").join("");
//   return noSpaces;
// }
// console.log(removeSpaces(sentence));

//9. Return a Boolean if a number is divisible by 10

//Prvi Nacin
// var input = parseInt(prompt("Unesite broj:"));
// function checkExpression(num) {
//   if (num % 10 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkExpression(input));

//Drugi Nacin
// var input = parseInt(prompt("Unesite broj:"));
// function checkExpression(num) {
//   return num % 10 === 0 ? true : false;
// }

// console.log(checkExpression(input));

// 10. Return the number of vowels in a string

// var inputString = prompt("Unesite recenicu");

// function vowelCounter(str) {
//   var vowelCount = 0;
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var char of str) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }

// console.log(vowelCounter(inputString));
