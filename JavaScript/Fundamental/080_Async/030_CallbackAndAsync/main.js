// // これだと，a -> b -> task1の順に表示される. 
// function a() {
//     setTimeout(function() {
//         console.log('task1: done');
//     });
//     
//     console.log('a: done');
// }
// 
// function b() {
//     console.log('b: done');
// }
// 
// a();
// b();

function a(b) {
    setTimeout(function() {
        console.log('task1: done');
        b();
    });
    
    console.log('a: done');
}

function b() {
    console.log('b: done');
}

// これだと，a -> b -> task1の順に表示される. 
a(b);