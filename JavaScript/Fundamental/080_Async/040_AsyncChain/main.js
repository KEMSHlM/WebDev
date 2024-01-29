//  順次実行したい非同期処理がある場合，以下のように書くと可動性が下がる．
function sleep(callback, val) {
    setTimeout(function() {
        console.log(val++);
        // callback()は，sleep()の引数として渡された関数を実行する．
        callback(val);
    }, 1000);
}

sleep(function(val) {
    sleep(function(val) {
        sleep(function(val) {

        }, val);
    }, val);
}, 0);