// // Exercicio 1

// function cumprimentar(nome) {
//     const mensagem = 'Olá, '
//     const final = '!'
//     let resultado = mensagem.concat(nome, final)
//     console.log(resultado)
//     return resultado
// }

// cumprimentar('Tamara')

// // Exercicio 2

// function converterIdadeEmAnosParaDias(dias) {
//     let resultado = dias * 365
//     console.log(resultado)
//     return resultado
// }

// converterIdadeEmAnosParaDias(25)

// // Exercicio 3

// function calcularSalario(horas, valor) {
//     let mensagem = 'Salário igual a R$ '
//     let calculo = valor * horas
//     let resultado = mensagem.concat(calculo)
//     console.log(resultado)
//     return resultado
// }

// calcularSalario(150, 40.5)


// // Exercicio 4
// function nomedoMes(numero) {
//     let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
//     meses.forEach(function (nome, indice) {
//         if (indice + 1 == (numero)) {
//             console.log(nome)
//         }
//         return nome
//     })
// }

// nomedoMes(2)
// nomedoMes(4)


// // Exercicio 5 - esta errado

// function maiorOuIgual(val1, val2) {
//     let resultado = (val1 >= val2)
//     console.log(resultado)
//     return resultado
// }

// maiorOuIgual(0, 0)
// maiorOuIgual(0, "0")
// maiorOuIgual(5, 1)

// Exercicio 6 -

// function inverso(valor) {
//     if (valor === true || valor === false || Number.isInteger(valor)) {
//         if (valor === true || valor === false) {
//             if (valor === false) {
//                 let resultado = true
//                 console.log(resultado)
//                 return resultado
//             } else {
//                 let resultado = false
//                 console.log(resultado)
//                 return resultado
//             }
//         } else {
//             if (valor > 0) {
//                 let resultado = valor - (valor * 2)
//                 console.log(resultado)
//                 return resultado
//             } else {
//                 let resultado = valor + (valor * -2)
//                 console.log(resultado)
//                 return resultado
//             }
//         }
//     } else {
//             let resultado = 'Booleano ou numero esperados, mas o parametro é do tipo string'
//             console.log(resultado)
//             return resultado
//     }
// }

// inverso(true)
// inverso("6")
// inverso(-2000)
// inverso("testando")

// Exercicio 7 -

// function estaEntre(numero, minimo, maximo, inclusivo = false) {
//     if (inclusivo === false) {
//         if (numero > minimo && numero < maximo) {
//             let resultado = true
//             console.log(resultado)
//             return resultado
//         } else {
//             let resultado = false
//             console.log(resultado)
//             return resultado
//         }
//     } else {
//         if (numero => minimo && numero <= maximo) {
//             let resultado = true
//             console.log(resultado)
//             return resultado
//         }
//     }
// }

// estaEntre(10, 50, 100)
// estaEntre(16, 100, 160)
// estaEntre(3, 3, 150)
// estaEntre(3, 3, 150, true)


// Exercicio 8 -

// function multiplicar(num1, num2) {
//     let multiplicacao = 0
//     for (let i = 0; i < num1; i++) {
//         multiplicacao = multiplicacao + num2
//     }
//     console.log(`o valor é: ${multiplicacao}`)
//     return multiplicacao
// }

// multiplicar(5, 5)
// multiplicar(0, 7)

// Exercicio 9 -

// function repetir(dado, numeroVezes) {
//     let array = []
//     for (let i = 0; i < numeroVezes ; i++) {
//         array.push(dado)
//     }
//     console.log(array)
//     return array
// }

// repetir("codigo", 2)
// repetir(7, 3)

// Exercicio 10 -

// function simboloMais(quantidade) {
//         let string = ""
//     for (let i = 0; i < quantidade ; i++) {
//         string = string + "+"
//     }
//     console.log(string)
//     return string
// }
// simboloMais(2)
// simboloMais(4)

// Exercicio 11

// function recebePrimeiroEUltimoElemento(array) {
//    var resultado = []
//     let resultado1 = array.shift();
//     let resultado2 =  array.pop()
//     resultado.push(resultado1, resultado2)
//     console.log(resultado)
//     return resultado
// }

// recebePrimeiroEUltimoElemento([7, 14, " olá"])
// recebePrimeiroEUltimoElemento([-100, "aplicativo", 16])

// Exercicio 12 - n consegui fazer

// removerPropriedade({a: 1, b: 2}, "a")
// removerPropriedade({id:20, nome: "caneta", descricao: "Nao preenchido"}, "descricao")


// Exercicio 13

// function filtrarNumeros(array) {
//     let resultado = []
//     for (let i = 0; i < array.length; i++) {
//         if (Number.isInteger(array[i])) {
//             resultado.push(array[i])
//         }
//     }
//     console.log(resultado)
//     return resultado
// }

// filtrarNumeros(["Javascript", 1, "3", "Web", 20])
// filtrarNumeros(["a", "c"])

// Exercicio 14

// function objetoparaArray(obj) {
//     let resultado = []
//     Object.entries(obj).forEach(([chave, valor]) => {
//         resultado.push([chave,valor])
//     })
//     console.log(resultado)
//     return resultado
// }

// objetoparaArray({ nome: "Maria", profissao: "desenvolvedora de software" })
// objetoparaArray({ codigo: 11111, preco: 12000 })

// Exercicio 15 - retornar array com numeros pares: nao entendi

// function receberSomenteOsParesDeIndicesPares(array){

// }

// receberSomenteOsParesDeIndicesPares([1,2,3,4])
// receberSomenteOsParesDeIndicesPares([10,70,22,43])

// Exercicio 16 - retornar array com numeros pares: nao entendi

// Exercicio 17 - retornar true ou false para anos bissextos - n entendi

// Exercicio 18 - soma numeros

// function somarNumeros(array) {
//     let total = 0
//     array.forEach(function (numero){
//         total += numero
//     })
//     console.log(total)
//     return total
// }
// somarNumeros([10, 10, 10])
// somarNumeros([15, 15, 15, 15])


//// Exercicio 19 - calcula total despesas 

// function despesasTotais(arrayObj) {
//     let total = 0
//     arrayObj.forEach(objeto => {
//         total += objeto.preco
//     });
//     console.log(total)
//     return total
// }

// despesasTotais([{ nome: "Jornal online", categoria: "Informação", preco: 89.90 }, { nome: "Cinema", categoria: "Entretenimento", preco: 150 }])
// despesasTotais([{ nome: "Galaxy S20", categoria: "Eletronicos", preco: 3599.99 }, { nome: "Macbook Pro", categoria: "Eletronicos", preco: 30999.90 }])


//// Exercicio 20 - Calcula media

// function calcularMedia(array) {
//     let total = 0
//     let resultado = 0
//     array.forEach(function (numero) {
//         total += numero
//     })
//     resultado = total / array.length
//     console.log(resultado)
//     return
// }

// calcularMedia([0, 10])
// calcularMedia([1, 2, 3, 4, 5])

//// Exercicio 21 - Area do triangulo com funcao toFixed

// function areaDoTriangulo(base, altura){
//     let calculo = (base * altura) / 2
//     console.log(calculo.toFixed(2))
//     return
// }


// areaDoTriangulo(10,15)
// areaDoTriangulo(7,9)
// areaDoTriangulo(9.25,13.1)

//// Exercicio 22 - Retorna menor numero do array

// function menorNumero(array) {
//     let menor = 999999999
//     array.forEach(function (numero) {
//         if (numero < menor) {
//             menor = numero
//         }
//     })
//     console.log(menor)
//     return
// }

// menorNumero([10, 5, 35, 65])
// menorNumero([5, -15, 50, 30])

//// Exercicio 23 - Retorna menor numero do array

// function funcaodaSorte(selecionado, min = 1, max = 10) {
//     let valor = Math.random() * (max - min) + min
//     valor = valor.toFixed(0)
//     valor === selecionado ? console.log(`Parabens! O numero sorteado foi o ${valor}`) : console.log(`Que pena! O número sorteado foi o ${valor}`)
//     return
// }

// funcaodaSorte(10)
// funcaodaSorte(5)
// funcaodaSorte(50)

//// Exercicio 24 - receber uma string e contar quantidade de espacos - n sei 

// function contarPalavras(frase) {
//     let palavras = frase.split(" ")
//     console.log(palavras.length)
//     return palavras.length
// }

// contarPalavras("Sou uma frase")
// contarPalavras("Me divirto aprendendo a programar")

//// Exercicio 25 - percorrer uma frase e ver quantas vezes um caractere se repete - case-sensitive

// function contarCaractere(caractere, frase) {
//     let contador = 0
//     for (var i = 0; i < frase.length; i++) {
//         if (frase.charAt(i) === caractere)
//         contador++
//     }
//     console.log(contador)
//     return contador
// }

// contarCaractere("r", "A sorte favorece os audazes")
// contarCaractere("c", "Conhece-te a ti mesmo")


//// Exercicio 26 - percorrer um array e contar qnt de vezes aparece um pedaço da palavra

// function buscarPalavrasSemelhantes(inicio, palavras) {
//        let resultado = palavras.filter(palavra => palavra.includes(inicio))
//        console.log(resultado)
//        return
// }


// buscarPalavrasSemelhantes("pro", ["programacao", "mobile", "profissional"])
// buscarPalavrasSemelhantes("python", [])

//// Exercicio 26 - Remover vogais das frases

function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    console.log(frase)
    return frase 
}


removerVogais("Cod3r")
removerVogais("Cod3r")