// 問題1
function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    return addNumber;
}

// Closure で簡略化すると
addNumberFactory = num => value => num + value;

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

// 問題2
function incrementFactory() {
    let num = 0;
    function a() {
        num += 1;
        console.log(num);
    }
    return a;
}

// Closure で簡略化すると
incrementFactory = () => {
    let num = 0;
    return () => {
        // さらに簡略化すると
        console.log(++num);
    }
}

const increment = incrementFactory();
increment();
increment();
increment();
increment();
// incrementFactory(); // これはエラーになる．
// なぜなら，incrementFactoryは関数を返す関数だから．
incrementFactory()();
// これはOK．