let a = 10, b = 20;
let obj1 = { // es_5
    a: 10,
    b,
    f1: function () {
        console.log('I am f1...')
    },
    f2() {
        console.log('I am f2...')
    }
}

let userName = 'sanjay';
let user = {
    userName,
    greet() {
        console.log(`Hello ${this.userName}`)
    }
}
user.greet()
console.log(user.userName)

