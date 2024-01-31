// 問題
// オブジェクトの状態をlocalStorageに保存しよう．
// 以下の要件に従ってlocalStorageに状態を保持するオブジェクト作成してみてください．
// 
// 1. オブジェクトの値が変更された時に，
// オブジェクトをJSONに変換し，localStrageに
// 登録する．localStorageに登録する際のキー
// は"test-data"としてください．
//
// 2. プログラムが実行される際にlocalStorage
// を指定のキーで検索し，JSONがすでに登録されて
// いる場合に，そのJSONからオブジェクトを復元し
// 初期値のオブジェクトとしてください．

const KEY = 'test-data';

const handler = {
    get: function (target, prop, receiver) {
        if (target.hasOwnProperty(prop)) {
            return Reflect.get(target, prop, receiver);
        } else {
            return -1;
        }
    },
    set: function(target, prop, receiver) {
        
        return Reflect.set(target, prop, receiver);
    } 
    
}

const pxy = new Proxy(targetObj, handler);

// console.log('init', pxy);
// pxy.name = 'Tom';
// console.log