import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i), "*".repeat(2 * i - 1));
  }
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}
pattern(4);
