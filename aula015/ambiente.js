// let num = [5, 8, 2, 9, 3]
// num.sort()
// num.push(1)
// console.log(num)
// console.log(`O vetor tem ${num.length} posições.`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)

// let valores = [4, 7, 8, 9, 2, 4, 3, 4, 1]
// console.log(valores)
// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// let num = [4, 7, 8, 9, 2, 4, 3, 4, 1]
// console.log(num)
// for (let pos in num) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

let num = [4, 7, 8, 9, 2, 4, 3, 4, 1]

let numP = num.indexOf(9)
if (numP == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 9 está na posicão ${numP}`)
}
