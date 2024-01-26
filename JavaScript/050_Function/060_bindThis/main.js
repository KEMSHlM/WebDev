window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello(); // Hello Tom

// これは関数から呼び出されているので、thisはグローバルオブジェクトを指す
function fn(ref) {
    ref();
}
fn(person.hello); // Hello John

// 上を回避するには，bindを使う
fn(person.hello.bind(person)); // Hello Tom

const ref = person.hello.bind(person);
ref(); // Hello Tom