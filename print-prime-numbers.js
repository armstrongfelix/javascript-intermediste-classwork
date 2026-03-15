/*
Write a program that loops through numbers 1 to 30 and prints only prime numbers.
*/

for (let i = 2; i <= 30; i++) {
  let isPrime = true;

  // Check if i is divisible by any number from 2 up to its square root
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
