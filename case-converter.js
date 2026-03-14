/*
Given a list of words, print each word in uppercase if it has more than 4 letters, lowercase if it has fewer, and title case if it has exactly 4.
*/
const names = ["felix", "Amarachi", "Sandra", "rad5", "jane", "Smart", "Oga"];

for (let i of names) {
  if (i.length > 4) {
    console.log(i.toUpperCase());
  } else if (i.length < 4) {
    console.log(i.toLowerCase());
  } else {
    console.log(i.charAt(0).toUpperCase() + i.slice(1).toLowerCase());
  }
}
