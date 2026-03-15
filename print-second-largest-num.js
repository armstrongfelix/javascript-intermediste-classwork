/*
Given a list of numbers, find and print the second largest value without sorting the list.
*/

let largest;
let secondLargest;

numbers = [2, 6, 7, 9, 0, 6, 5, 45, 67, 788, 5, 44, 5, 776, 46, 4, 666];
for (let i of numbers) {
  if (largest == undefined || i > largest) {
    secondLargest = largest;
    largest = i;
  } else if (secondLargest == undefined || i > secondLargest) {
    secondLargest = i;
  }
}
console.log(`\nSecond Largst: ${secondLargest}\n \nLargest: ${largest}`);
