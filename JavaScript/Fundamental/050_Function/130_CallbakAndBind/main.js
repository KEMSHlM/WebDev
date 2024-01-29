// 問題 重要そう．
function calcFactory(val, callback) {
    // ここでbindを使う．
    // bindは，関数を返す関数．こういう使い方をする．
    function callbackAfter1sec(str) {
        setTimeout(callback.bind(null, str), 1000);
    }
    return {
        plus: function(target) {
            val += target;
            callbackAfter1sec(val);
        },
        minus: function(target) {
            val -= target;
            callbackAfter1sec(val);
        },
        multipy: function(target) {
            val *= target;
            callbackAfter1sec(val);
        },
        divide: function(target) {
            val /= target;
            callbackAfter1sec(val);
        },
    }
}

const calc = calcFactory(10, console.log);
calc.plus(5);