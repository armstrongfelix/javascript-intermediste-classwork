/*
Take a list of mixed strings and numbers. Loop through and print the sum of all numbers and the count of all strings separately.
*/

let stringCounter = 0;
let numSum = 0;
mylist = [4, 5, 6, 7, "felix", 90, "rad5", 89, "Favour"];

for (i of mylist) {
  if (typeof i == "number") {
    numSum += i;
  } else if (typeof i == "string") {
    stringCounter++;
  }
}

console.log(`Number Sum : ${numSum} \nString Count: ${stringCounter}`);
