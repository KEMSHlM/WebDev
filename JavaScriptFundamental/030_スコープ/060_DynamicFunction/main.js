// 動的な関数の生成

// add5の場合を考える
function addNumberFactory(num) { // <- num = 5
    function addNumber(value) {
        return num + value;   // <- num = 5
    }
    
    return addNumber;  // すでにnumが5になっている
}

const add5 = addNumberFactory(5);
// 15が出力される
const result = add5(10);
console.log(result);

const add10 = addNumberFactory(10);
// 20が出力される
result = add10(10);
console.log(result);