// クロージャで四則演算関数を作成する．

const calcFactory = (function(num) {
    let plus = function(value) {
        num = num + value;
        console.log(num);
    }
    let minus = function(value) {
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
})(10)

const calc = calcFactory;

calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);