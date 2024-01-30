// どこでもエラー処理を書くことができる．
async function fetchUsers() {
    const response = await fetch('./unko.json');
    if (response.ok) {
        const json = await response.json();
        if (!json.length) throw new NoDataError('no data found'); 

        return json;
    }
}

// カスタムエラーを作成することができる．
class NoDataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NoDataError';
    }
}

async function init() {
    try {
        const users = await fetchUsers();
        for (const user of users) {
            console.log("I am " + user.name + ", " + user.age + " years old.");
        }
    } catch (e) {
        // ここでエラー分岐することができる．
        if (e instanceof NoDataError) {
            console.error(e);
        } else {
            console.error('Oops');
        }
    } finally {
        console.log('bye');
    }
}

init();