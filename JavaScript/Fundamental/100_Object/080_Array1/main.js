const arry = [1, 2, 3, 4, 5];

arry.push(6);
console.log(arry); // [1, 2, 3, 4, 5, 6]

arry.pop();
console.log(arry); // [1, 2, 3, 4, 5]

const result = arry.slice(2, 5);
console.log(result); // [3, 4, 5]

const result2 = arry.splice(2, 3, "three", "four", "five");
console.log(result2); // [3, 4, 5]

const arry2 = [...arry, 6, 7, 8];
console.log(arry2); // [1, 2, 3, 4, 5, 6, 7, 8]