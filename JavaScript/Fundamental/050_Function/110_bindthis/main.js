const person = {
    name: 'Tom',
    bye() {
        console.log('Bye' + ' ' + this.name);
    },
    hello: function(greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    // 問題4 これむずいな
    hello1s() {
        setTimeout(this.hello.bind(this, 'hello'), 1000);
        // 以下はシンタックスエラーが出る．
        // それは，setTimeoutの第一引数には関数を渡す必要があるから．
        // setTimeout(this.hello('hello'), 1000);
    },
    // hello1s() {
    //     setTimeout(() => {
    //        this.hello('hello');
    //      }, 1000);
    // },
    // hello1s() {
    //  const _this = this; 
    //  setTimeout(function() {
    //      _this.hello('hello');
    // }
}
// 問題4
console.log('問題4');
person.hello1s();

// 問題1
// なんでbindを使うのかわからない
// 無名関数使ってるから，thisはpersonを指すんじゃないの？
// それは，setTimeoutの第一引数には関数を渡す必要があるから．
console.log('問題1');
setTimeout(person.hello.bind(person, 'hello'), 1000);

// 問題2
// console.log('問題2');
// setTimeout(alert(person.hello("hello")), 1000);

// 問題3
console.log('問題3');
setTimeout(person.bye.bind(person), 1000);
