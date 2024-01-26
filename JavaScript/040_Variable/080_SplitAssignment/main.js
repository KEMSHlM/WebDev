const a = {
    prop: 0
}
console.log(a);

// これは{..} = a; であるため，純粋なコピーになる．
let { prop } = a;
prop = 1;
console.log(prop);

// 別名をつけたい場合は，以下のようにする．
let { prop: prop2 } = a;
prop2 = 2;
console.log(prop2);

function fn1(obj) {
    let { prop } = obj;
    console.log(obj, prop);
}
fn1(a);

function fn2({ prop }) {
    console.log(a, prop);
}
fn2(a);

const c = {
    prop1: {
        prop2: 0
    }
}

let { prop1 } = c;

// prop1 = { prop2: 1 }; と同じ．であるので，prop2の参照がコピーされる．
prop1.prop2 = 1;
console.log(c, prop1);