/*
Write a program that loops through a list of prices and applies a 15% discount to any price over 50, then prints the updated prices.

*/

for (let i = 10; i <= 1000; i += 5) {
  if (i > 50) {
    dicountPrice = 0.85 * i;
    console.log(`original price : ${i}  ______  Discout price ${dicountPrice}`);
  } else {
    console.log(`original price : ${i} ______  No discount price ${i}`);
  }
}
