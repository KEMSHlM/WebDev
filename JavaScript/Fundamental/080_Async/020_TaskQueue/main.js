const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log('1: clicked');
});

function a() {
    setTimeout(function() {
        console.log('2: TimeOut');
    }, 4000);

    const startTime = new Date();
    // while (new Date() - startTime < 2000);
    while (new Date() - startTime < 8000);

    console.log('3: a is done');
}

// windowを開いた後に，クリックすると，3, 1, 2の順に表示される.
// これは，3の処理が終わるまで，1の処理が実行されないため.
a();