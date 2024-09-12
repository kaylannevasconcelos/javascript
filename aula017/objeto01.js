let amigo = {nome: 'Marina',
sexo: 'F', 
idade: '8', 
peso: 23.5,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)



/*   isso é tudo, pessoal !   */