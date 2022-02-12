/**
 * Exercícios extras (Aula 01):
Os exercícios aqui propostos visam reforçar a prática da linguagem 
javascript de acordo com o que foi visto na primeira aula extra.

1) Dado um vetor de números, como poderia ser 
realizada a soma de todos os valores utilizando reduce.

2) Dado um vetor de números, como poderia ser realizada 
a soma de todos os valores pares utilizando reduce e filter.

3) Dado um vetor de números, como poderia ser realizada a 
soma de todos os valores ímpares utilizando reduce e filter.

4) Dado um vetor de valores, retorne um objeto com quantas 
vezes cada valor está presente no vetor (dica: utilize reduce)

5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)

6) Dado um vetor com números, retorne somente os números pares;

7) Dado um vetor com números, retorne somente os números ímpares;

8) Uma função é chamada da seguinte forma:

calculadora(10, '+', 20)

crie o corpo da função de forma que ela realize as 4 operações aritméticas

9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

const soma = (num1, num2) => num1+num2

const calculadoraFn = (....) => ….

calculadoraFn(10, soma, 20
 */

console.log(`1) Dado um vetor de números, como poderia ser 
realizada a soma de todos os valores utilizando reduce.`)
const arr1 = [1,2,3,4,5,9]
const reduce = (previousValue, currentValue) => previousValue + currentValue
console.log( arr1.reduce(reduce) )
console.log( '------------------------\n' )

console.log(`2) Dado um vetor de números, como poderia ser realizada 
a soma de todos os valores pares utilizando reduce e filter.`)
const filteredPar = (value) => value % 2 === 0
console.log( arr1.filter(filteredPar).reduce(reduce) )

console.log( '------------------------\n' )
console.log(`3) Dado um vetor de números, como poderia ser realizada a 
soma de todos os valores ímpares utilizando reduce e filter.`)
const filteredImpar = (value) => value % 2 !== 0
console.log( arr1.filter(filteredImpar).reduce(reduce) )

console.log( '------------------------\n' )
console.log(`4) Dado um vetor de valores, retorne um objeto com quantas 
vezes cada valor está presente no vetor (dica: utilize reduce)`)

const arr2 = [1,1,1,2,5,3,3,4,4,8,6]
const howManyTimes = (agg, value) =>{
    if(!agg[value]){
        agg[value] = 0
    }
    agg[value] = agg[value] + 1
    // console.log(agg, value)
    return agg
}

const times = arr2.reduce(howManyTimes, {})
console.log(times)

console.log( '------------------------\n' )
console.log(`5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)`)
const arr3 = [1,1,2,44,5,3,6,4,8,'rubens', 'rubens']
const howManyTimes1 = (agg, value) =>{
    if( !agg[value] ){
        agg[value] = {
            value: value,
            ocuur: 0
        }
    }
    agg[value].ocuur = agg[value].ocuur + 1 
    return agg 
}
const contagem = arr3.reduce(howManyTimes1, {})
const keys = Object.keys(contagem)
const unique = keys.filter(key => contagem[key].ocuur === 1)
const uniqueValues = unique.map(val => contagem[val].value)
// console.log( 'valor unique', unique )
// console.log( 'contagem', contagem )
// console.log( 'keys', keys )
// console.log( arr3.reduce(howManyTimes1, {}) )
console.log( 'valor unico', uniqueValues )

console.log( '------------------------\n' )
console.log(`6) Dado um vetor com números, retorne somente os números pares; `)
const arr4 = [1 ,2,3,4,5,6,8,7,16] 
console.log( arr4.filter(filteredPar) )

console.log( '------------------------\n' )
console.log(`7) Dado um vetor com números, retorne somente os números ímpares;`)
console.log( arr4.filter(filteredImpar) )

console.log( '------------------------\n' )
console.log(`8) Uma função é chamada da seguinte forma:

calculadora(10, '+', 20)

crie o corpo da função de forma que ela realize as 4 operações aritméticas`)
const calculadora = (a, param, b) =>{
    switch(param){
        case "+":
            console.log(a + b)
        break;
        case "-":
            console.log(a - b)
        break;
        case "*":
            console.log(a * b)
        break;
        case "/":
            console.log(a / b)
        break;
        defualt:
            console.log('valor invalido: ')
    }
}
calculadora(4,'+',4)
calculadora(6,'-',4)
calculadora(4,'*',4)
calculadora(16,'/',4)

console.log( '------------------------\n' )
console.log(`9)Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

const soma = (num1, num2) => num1+num2

const calculadoraFn = (....) => ….

calculadoraFn(10, soma, 20`)
const calculadoraFn = (a, param, b) => param(a,b)
const somaValue = (a,b) => a + b
const newSub = (a,b) => a - b
console.log(calculadoraFn(10, somaValue, 20))
console.log(calculadoraFn(10, newSub, 20))