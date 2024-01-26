// 問題１
console.log('問題1');
const person = {
    hello: function() {
        return 'hello Tom';
    }
}

let message = person.hello();
setTimeout(console.log(message), 1000); // hello John

console.log('問題2');
setTimeout(function() {
    const message2 = person.hello();
    alert(message2);
}, 1000); // hello Tom

// 問題3
// 略

// 問題4　良問
console.log('問題4');
function calcFactory(val, callback) {
    return {
        plus: function(target) {
            val += target;
            callback(val);
        },
        minus: function(target) {
            val -= target;
            callback(val);
        },
        multipy: function(target) {
            val *= target;
            callback(val);
        },
        divide: function(target) {
            val /= target;
            callback(val);
        },
    }
}

const calc = calcFactory(10, console.log);
calc.plus(5);
calc.minus(5);
calc.multipy(5);
calc.divide(5);

