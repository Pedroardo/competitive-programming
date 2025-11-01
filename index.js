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

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log("4.Two Sum: ", twoSum([2, 7, 11, 15], 9));

function fizzBuzz(n) {
  var result = [];

  for (var i = 1; i <= n; i++) {
    var answer = "";

    if (i % 3 === 0) {
      answer = "Fizz";
    } else if (i % 5 === 0) {
      answer = "Buzz";
    } else if (i % 3 === 0 && i % 5 === 0) {
      answer = "FizzBuzz";
    } else {
      answer = i.toString();
    }

    result.push(answer);
  }

  return result;
}
console.log("5.FizzBuzz:", fizzBuzz(5));
