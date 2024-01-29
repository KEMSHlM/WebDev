// こう書くほうがおしゃん
function* genStep({ min=0, max=20, step=1 } = {}) {
    let i = min;

    while (i <= max) {
        yield i;
        i += step;
    }
}

console.log("1:");
const it = genStep();
for (const a of it) {
    console.log(a);
}

console.log("2:");
const it2 = genStep({max: 5});
for (const a of it2) {
    console.log(a);
}
