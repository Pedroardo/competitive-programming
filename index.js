import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }

  // lower inverted pyramid
  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}
console.log("1. Pattern: ");
pattern(4);

function anagram(firstWord, secondWord) {
  const first = firstWord.split("").sort().join("");
  const second = secondWord.split("").sort().join("");

  return first === second; // untuk cek apakah 2 kata diatas ini memiliki huruf yang sama atau tidak
}
console.log("2. Anagram: ", anagram("listen", "silent"));

function reverseText(text) {
  return text.split("").reverse().join("");
}
console.log("3.Reverse text: ", reverseText("hello"));

function anagrams(k1, k2) {
  const test = k1.split("").sort().join("");
  const test2 = k2.split("").sort().join("");
  return test === test2;
}

console.log(anagrams("listen", "silent"));

function gradingStudent(num) {
  const result = [];

  for (let grade of num) {
    if (grade < 38) {
      result.push(grade);
    } else {
      const nextMultiple = Math.ceil(grade / 5) * 5;

      if (grade - nextMultiple < 3) {
        result.push(nextMultiple);
      } else {
        result.push(grade);
      }
    }
  }
  return result;
}
