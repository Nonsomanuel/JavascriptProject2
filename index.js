function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // olleH
console.log(reverseString("JavaScript")); // tpircSavaJ

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("Hello")); // 5
console.log(countCharacters("JavaScript")); // 10

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));

console.log(capitalizeWords("learning javascript is fun"));

function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}

const numbers = [10, 5, 25, 8, 15];

console.log(findMaximum(numbers)); // 25
console.log(findMinimum(numbers)); // 5

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60

function filterArray(arr, condition) {
  return arr.filter(condition);
}

const number = [1, 2, 3, 4, 5, 6];

console.log(filterArray(number, (num) => num > 3));
// [4, 5, 6]

console.log(filterArray(number, (num) => num % 2 === 0));
// [2, 4, 6]

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid input";
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1

function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true

function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid input";
  }

  let sequence = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

console.log(fibonacci(5));
// [0, 1, 1, 2, 3]

console.log(fibonacci(8));
// [0, 1, 1, 2, 3, 5, 8, 13]
