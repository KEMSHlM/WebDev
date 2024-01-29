function sleep(val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(val++);
            resolve(val);
        }, 100);
    });
}

// 返り値はPromiseオブジェクト
async function init() {
    let val = await sleep(0);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    console.log(val);
    return val;
}

// init();

// 返り値はPromiseオブジェクトであるため
init().then(function(val) {
    console.log('hello' + val);
});

// Arrow関数で簡単に書ける
// sleep(0).then(val => sleep(val))
//         .then(val => sleep(val))
//         .then(val => sleep(val))
//         .then(val => sleep(val))
//         .then(val => sleep(val))
//         .then(val => sleep(val));