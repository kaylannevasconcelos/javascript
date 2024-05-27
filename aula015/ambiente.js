var num = [5,3,4]
num.sort()/* coloca em ordem, sendo 3,4,5 */
console.log(`a variavel é ${num}`)
console.log(`a variável tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`) /* -> aqui o primeiro valor se apresenta como 3 porque o comando "num.sort()" colocou os valores declarados em ordem */

let pos = num.indexOf(5)
if (pos == -1) {
    console.log('o valor não foi encontrado.')
} else {
    console.log(`o valor está na posição ${pos}`)
}