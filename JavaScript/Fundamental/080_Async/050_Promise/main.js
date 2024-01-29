new Promise(function(resolve, reject) {
    console.log('Promise');
    setTimeout(function() {
        resolve('hello')
    }, 1000);
}).then(function() {
    console.log('then 1');
}).then(function() {
    console.log('then 2');
}).catch(function() {
    console.log('catch');
}).finally(function() {
    console.log('finally');
});

console.log('global end');