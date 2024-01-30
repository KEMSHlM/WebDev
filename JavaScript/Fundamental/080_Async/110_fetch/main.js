// windowは省略可能
// window.fetch('./users.json').then(function (response) {
//     console.log('1: normal pattern');
//     console.log('1:' + response);
//     return response.json();
// }).then(function (json) {
//     console.log('2:' + json);
//     for (const user of json) {
//         console.log("I am " + user.name + ", " + user.age + " years old.");
//     }
// });

async function fetchUsers() {
    const response = await fetch('./users.json');
    console.log(response);
    const json = await response.json();
    console.log(json);
    for (const user of json) {
        console.log("I am " + user.name + ", " + user.age + " years old.");
    }
}

fetchUsers();