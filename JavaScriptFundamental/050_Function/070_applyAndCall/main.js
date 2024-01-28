function a() {
    console.log('hello, ' + this.name);
}

const b = a.bind( {name: 'Tom'} );
b(); // hello, Tom

a.apply( {name: 'Tim'} ); // hello, Tim
a.call( {name: 'Bob'} ); // hello, Bob

// applyとcallの違いは引数の渡し方

function c(name) {
    console.log('hello, ' + name);
} 

// thisを指定する必要がない場合は、nullを指定する
c.apply( null, ['Tim'] ); // hello, Tim
c.call( null, 'Tim' ); // hello, Tim