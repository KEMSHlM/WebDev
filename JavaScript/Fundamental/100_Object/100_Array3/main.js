const arry = [1, 2, 3, 4, 5];

// 最初の　accuを指定できる．
// accu = 0, curr = 1
// accu = 1, curr = 2
// accu = 3, curr = 3
// accu = 6, curr = 4
// accu = 10, curr = 5
const result = arry.reduce(function(accu, curr) {
    console.log(accu, curr);
    return accu + curr;
}, 0);

console.log(result);