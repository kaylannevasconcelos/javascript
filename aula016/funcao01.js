function parimpar(n) {   /* A VARIÁVEL "PARIMPAR" FOI DECLARADA DENTRO DA FUNÇÃO */
    if (n%2 == 0) {
        return "par!"
    } else {
        return "impar!"
    }
}

let res = parimpar(293)   /* NESSE CASO A VARIÁVEL "RES" REPRESENTA "PARIMPAR" SOMENTE QUANDO ELA TEM O VALOR 293 */
console.log(res)

/* console.log(parimpar(293)) */