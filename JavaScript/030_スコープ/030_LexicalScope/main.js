// グローバルスコープ
let a = 2;
function fn1() {
    // ローカルスコープ(fn1)
    let b = 1;
    // ローカルスコープ(fn2)
    function fn2() {
        let c = 3;
        // クロージャー，スコープチェーン
        console.log(b);
    }
    fn2();
}

fn1();

// 当然以下のように定義した場合，エラーとなり，bは参照できない．
// function fn2() {
//     let c = 3;
//     // クロージャー，スコープチェーン
//     console.log(b);
// }
// fn2();