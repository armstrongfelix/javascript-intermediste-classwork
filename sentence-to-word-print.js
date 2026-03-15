/*
Write a program that loops through a sentence word by word and prints only words that don't contain the letter "e".
*/

let sentence =
  "Write a program that loops through a sentence word by word and prints only words that don't contain the letter";

for (let i of sentence.split(" ")) {
  if (!i.trim().includes("e")) {
    console.log(i);
  }
}
