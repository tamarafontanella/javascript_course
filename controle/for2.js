const notas = [6.7, 7.4, 9.8, 8.1, 7.7]


for (let i in notas) {
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Tamara',
    sobrenome: 'Fontanella',
    idade: 29,
    peso: 52

}

for(let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`)
}