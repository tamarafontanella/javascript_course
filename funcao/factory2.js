function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        desconto: 0.1
    }
}

console.log(criarPessoa('Tamara', 'Fontanella'))