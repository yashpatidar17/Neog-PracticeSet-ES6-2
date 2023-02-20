//Write a function that takes an array and returns the sum of first and last element.

const sumFirstAndLast = (arr) =>(arr[0]+arr[arr.length-1]);
console.log(sumFirstAndLast([2, 2, 3, 4, 8])); // 9