/* コールスタック */
// 以下のコード例では，
// global -> c -> b -> a の順でコールスタックに積まれる．

function a() {
}

function b() {
    a();
}

function c() {
    b();
}

c();
