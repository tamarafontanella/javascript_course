const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaco
 
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla:1,
        obj:{
        }
    }
}

console.log(prod2)