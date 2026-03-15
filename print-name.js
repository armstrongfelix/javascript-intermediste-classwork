/*
Take a list of names and print only the ones that start with a vowel and have more than 3 characters
*/
const names = ["felix", "Amarachi", "Sandra", "rad5", "jane", "Smart", "Oga"];
for (let i of names) {
  for (j of ["A", "E", "I", "O", "U"]) {
    if (i.startsWith(j) && i.length > 3) {
      console.log(i);
    }
  }
}
