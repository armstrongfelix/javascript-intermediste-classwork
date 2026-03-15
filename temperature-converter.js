/*
Write a program that loops through a list of temperatures in Celsius and converts each to Fahrenheit, but prints a warning if the result exceeds 100°F.
*/

temperatures = [
  4, 7, 88, 90, 5, 4, 830, 90, 67, 5, 44, 56, 34, 67, 23, 23, 12, 22, 4, 4, 4,
  44, 56, 77,
];

for (i of temperatures) {
  let f = i * (9 / 5) + 32;
  if (f > 100) {
    console.log(`\nCelcius : ${i} \nFahrenheit : ${f} \nWarning: Too high\n`);
  } else {
    console.log(`\nCelcius : ${i} \nFahrenheit : ${f}\n`);
  }
}
