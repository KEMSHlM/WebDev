import MyLibrary from './lib.js';

function customFn1() {
    console.log('customFn1');
}

function customFn2() {
    console.log('customFn2');
}

function customFn3() {
    console.log('customFn3');
}

events.on('beforeInit', customFn1);
events.on('beforeInit', customFn2);
events.on('afterInit', customFn3);

new MyLibrary();