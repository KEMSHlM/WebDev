// オブジェクト
let obj = {
    name: 'John',
    // 以下のようなfunctionに続くような関数を無名関数といい，
    // objectの持つ関数をメソッドという．
    hello: function() {
        console.log('Hello World!' + this.name); // this.nameで他のプロパティを参照できる
    }, 
    job: {
        title: 'Programmer',
        hello: function() {
            console.log('Hello World!' + this.title);
        }      
    }
}

// 後から，プロパティを追加することが可能．
obj.age = 20;

// オブジェクトが値ではなくても，出力は可能．
console.log(obj);
console.log(obj.age);
console.log(obj.name);
console.log(obj.job.title);

// 流石にこれはエラー．
// console.log(obj.job.hello());