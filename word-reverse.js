/*
    Given a list of words, loop through and print each word with its characters reversed, but only if the reversed version is different from the original.
*/

myList = ["felix", "Amarachi", "Sandra", "rad5", "jane", "Smart", "Oga"];
for (i of myList) {
  if (i.split("").reverse().join("") != i) {
    console.log(i.split("").reverse().join(""));
  }
}
