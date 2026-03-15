const text = "Hello, how are you doing today?";
const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };

const cleanText = text.toLowerCase();

for (let char of cleanText) {
  if (vowels.hasOwnProperty(char)) {
    vowels[char]++;
  }
}

console.log(vowels);
