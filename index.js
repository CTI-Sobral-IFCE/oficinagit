var readline = require('readline')
resp = ''

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual módulo ler dados no node.js?\n', function(answer) {
    resp = answer
    console.log('\nSua responsta "' + resp + '" foi gravada com sucesso numa váriável inútil')
    leitor.close()
})