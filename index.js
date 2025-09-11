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
