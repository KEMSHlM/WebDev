// クロージャで四則演算関数を作成する．

const calc = calcFactory(10);

function calcFactory(num) {
    function plus(value) {
        num = num + value;
        console.log(num);
    }
    function minus(value) {
        num = num - value;
        console.log(num);
    }
    function multiply(value) {
        num = num * value;
        console.log(num);
    }
    function divide(value) {
        num = num / value;
        console.log(num);
    }
    
    return {
        plus: plus,
        minus: minus,
        multiply: multiply,
        divide: divide
    };
}

calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);