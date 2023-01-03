const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa 456 -> {...}
// nao é possivel alterar a const pessoa
//pessoa = {nome: 'Ana'}

// congela o objeto pessoa
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)