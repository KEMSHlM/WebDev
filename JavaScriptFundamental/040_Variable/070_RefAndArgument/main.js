let a = 0;

// let arg1 = a; に等しい．
function fn1(arg1) {
    arg1 = 1;
    console.log(a, arg1);
}

fn1(a);

let b = { prop: 0 };

// let arg2 = b; に等しい．
// よって，a.propとb.propの参照は同じ．
function fn2(arg2) {
    arg2.prop = 1;
    console.log(b, arg2);
}

fn2(b);