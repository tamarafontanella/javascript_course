//Object.preventExtesions
// nao é possivel adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, rag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
// é possivel alterar o objeto mas nao pode adicionar ou remover atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes - Writable=false
