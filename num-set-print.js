/*
16. Write a program that loops through a list of numbers and prints each one, but skips any number that has already appeared earlier in the list.
*/

let numbers = [
  67, 90, 88, 9, 55, 66, 7, 8, 5, 6, 6, 46, 7, 5, 6, 5, 4, 8, 88, 7, 7, 7, 77,
  77, 88, 67, 55, 7,
];

seen = [];
for (i of numbers) {
  if (!seen.includes(i)) {
    console.log(i);
    seen.push(i);
  }
}
