/*
        Given a string, loop through each character and build two new strings — one with only vowels and one with only consonants. Print both.
*/

let vowel = "";
let consonant = "";

str = "Felix";
for (i of str) {
  for (j of [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "S",
    "V",
    "W",
    "Y",
    "Z",
  ]) {
    if (i.toUpperCase() == j) {
      consonant = consonant + i;
    }
  }
  for (j of ["A", "E", "I", "O", "U"]) {
    if (i.toUpperCase() == j) {
      vowel = vowel + i;
    }
  }
}
console.log(`vowel Sounds: ${vowel} ________  consonant sounds : ${consonant}`);
