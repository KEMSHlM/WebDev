// Macro Task 
setTimeout(function() {
    console.log('1: setTimeout');
});

new Promise(function promise(resolve) {
    console.log('2: promise'); 
    resolve();
// Micro Task
}).then(function job1() {
    console.log('3: job1');
});

console.log('4: global end');