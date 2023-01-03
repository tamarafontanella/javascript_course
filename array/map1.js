// For com propósito 

const nums = [1,2,3,4,5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = function(e) {
  return e + 10
}

const teste = 2
console.log('valida soma 10', soma10(teste))


const tripo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado)