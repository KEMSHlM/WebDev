function genStep(min=0, max=20, step=1) {
    let i = min;

    return {
        next: function() {
            if (i <= max) {
                const result = { value: i, done: false };
                i += step;
                return result;
            } else {
                return { done: true };
            }
        }
    };
}

const it = genStep(4, 10, 2);
let a = it.next();

while(!a.done) {
    console.log(a.value);
    a = it.next();
}
