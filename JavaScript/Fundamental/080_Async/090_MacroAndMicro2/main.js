// 以下の例は，1 -> 9 -> 2 -> 3 -> 7 -> 8 -> 4 -> 5 -> 6の順に実行される．
new Promise (function promise(resolve) {
    console.log('1: promise');
    
    setTimeout(function() {
        console.log('2: task 1');
        resolve();
    });

}).then (function job1() {
    console.log('3: job 1');
    setTimeout(function() {
        console.log('4: task 2');
        
        const p = Promise.resolve();        
        p.then(function job4() {
            console.log('5: microtask 1');
        });

        queueMicrotask(function() {
            console.log('6: microtask 1');
        });
    });
}).then (function job2() {
    console.log('7: job 2');
}).then (function job3() {
    console.log('8: job 3');
});

console.log('9: global end');