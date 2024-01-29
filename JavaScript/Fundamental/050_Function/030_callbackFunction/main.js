function hello(name) {
    console.log('hello' + name);
}

function bye(name) {
    console.log('bye' + name);
}

// 関数をオブジェクトとして渡せる．
// これをコールバック関数という．
function fn(cb) {
    cb('Tom');
}

fn(hello);
fn(bye);