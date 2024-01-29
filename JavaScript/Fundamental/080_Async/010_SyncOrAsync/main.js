// index.html にボタンを追加する必要がある．
function sleep(ms) {
    const startTime = new Date();
    // ms またせるには，このように処理を書かずに実装できる．
    while (new Date() - startTime < ms);
    console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log('button click');
});

// setTimeout は非同期処理
// よって，この処理はMainThreadから切り離される．そのため，クリックなどのイベントは受け付ける． 
setTimeout(function() {
    // 一方，この処理はMainThreadで実行されるため，クリックなどのイベントは受け付けない．
    sleep(3000);
}, 2000);