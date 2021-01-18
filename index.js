/*var readline = require('readline')
resp = ''

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual módulo ler dados no node.js?\n', function(answer) {
    resp = answer
    console.log('\nSua responsta "' + resp + '" foi gravada com sucesso numa váriável inútil')
    leitor.close()
})*/

console.log('Digite algo');
var variable
process.stdin.on('readable', () => { 
    variable = process.stdin.read(); 
    variable = variable.toString().replace(/\n/, "")
    variable = variable.replace(/\r/, "")
    
    console.log(`Você escreveu: ${variable}`)
});
