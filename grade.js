/* 
Write a program that takes a list of 5 student scores and prints the grade (A, B, C, D, F) for each one.
*/

const score = [90, 78, 6, 70, 33];
for (i of score) {
  if (i >= 90) {
    console.log(`${i} : Grade-A`);
  } else if (i >= 80) {
    console.log(`${i} : Grade-B`);
  } else if (i >= 70) {
    console.log(`${i} : Grade-C`);
  } else if (i >= 60) {
    console.log(`${i} : Grade-D`);
  } else if (i >= 50) {
    console.log(`${i} : Grade-E`);
  } else {
    console.log(`${i} : Grade-F`);
  }
}
