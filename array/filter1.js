const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipad Pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil
 
const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)