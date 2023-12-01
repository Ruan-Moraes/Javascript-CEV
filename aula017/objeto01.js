let amigo = {
    nome: 'José',
    idade: '18',
    sexo: 'M',
    Nacionalidade: 'Brasil',
    peso: 84.2,
    engordar(p=0) {
        console.log('Engordou!')
        this.peso += p
    }
}
amigo.engordar(10)
console.log(`${amigo.nome}, peso ${amigo.peso}Kg`)
