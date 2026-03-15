/*
Write a program that loops through numbers 1 to 50 and prints the running total, but resets back to 0 whenever the total exceeds 100.
*/
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum = sum + i;
  if (sum >= 100) {
    sum = 0;
    break;
  }
}
console.log(sum);
