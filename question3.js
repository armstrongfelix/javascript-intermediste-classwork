/*
Loop through numbers 1 to 100 and count how many are divisible by 3 but not by 9. Print the final count.
*/

let counter = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 9 !== 0) {
    counter++;
  }
}

console.log(counter);
