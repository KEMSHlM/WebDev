
function sleep(val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(val++);
            resolve(val);
        }, val*500);
    });
}

// Promise.all()を使うと，複数の非同期処理を並列で実行できる．
// 返り値は配列．
// Promise.all([sleep(2), sleep(3), sleep(4)])
//        .then(function(data) {
//             console.log(data);
//        });

sleep(0).then(val => Promise.all([sleep(2), sleep(3), sleep(4)]))
        .then(function(val) {
            console.log(val);
            return sleep(val);
        }).then(function(val) {
            return sleep(val);
        });

// 一番最初に終わったものが返る．
Promise.race([sleep(2), sleep(3), sleep(4)])
        .then(function(data) {
            console.log(data);
        });

// catch()が呼ばれない．
Promise.allSettled([sleep(2), sleep(3), sleep(4)])
        .then(function(data) {
            console.log(data);
        }).catch(function(err) {
            console.log(err);
        });