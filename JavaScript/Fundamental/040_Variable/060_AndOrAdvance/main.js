function hello(name) {
//　パタン1
// function hello(name = 'Anonymous') {
    //　パタン2
    // if (name === undefined) {
    //     name = 'Anonymous';
    // }
    
    //　パタン3
    name = name || 'Anonymous';
    console.log('hello ' + name);
}

hello('Bob');
hello();

let name = 'Bob';
name && hello(name);

let name2 = '';
// これは実行されない．
name && hello(name2);