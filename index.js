const reader = require('readline-sync')

async function lineHorizontal() {
    console.log('------------------------')
}

console.log('System of Authentication')
lineHorizontal()
let username = reader.question('Username: ')
const password = reader.question('Password: ', {hideEchoBack: true})

lineHorizontal()
if (username == 'admin' && password == 'foobar') {
    console.log(`Welcome ${username}!`)
} else {
    console.log('User and Password not found!')
}
lineHorizontal()