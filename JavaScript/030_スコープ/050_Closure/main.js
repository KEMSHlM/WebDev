// これは意図しない動作になる. 常に1が出力される
function incrementError() {
    let num = 0;
    num = num + 1;
    console.log(num);
}

console.log("Error pattern");
incrementError();
incrementError();
incrementError();

// これは意図した動作になる. また，外部からnumにアクセスできない.
function incrementFactory() {
    let num = 0;

    function increment() {
        num = num + 1;
        console.log(num);
    }
    
    return increment;
}

const increment = incrementFactory();

console.log("Factory pattern");
increment();
increment();
increment();