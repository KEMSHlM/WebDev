// import された時に実行されるよ
console.log('ESmodule called');

let privateVal = 1;
export let publicVal = {prop: 10};

export function publicFn() {
    console.log('publicFn called: ' + publicVal.prop);
}

function privateFn() {

}