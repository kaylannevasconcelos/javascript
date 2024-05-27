let valores = [8,1,7,4,2,9]

/* console.log(valores) */

/* 
console.log(valores[0])
console.log(valores[1])
console.log(valores[2]) 

for(let pos=0; pos < valores.length; pos++) {
    console.log(valores[pos])
} 

for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} 
---->>>>> esse tem o mesmo resultado do próximo comando:
*/
for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
