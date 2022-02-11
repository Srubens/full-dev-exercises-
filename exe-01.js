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

console.log(`1) Questao reduce`)
const arr1 = [1,2,3,4,5,9]
const reduce = (previousValue, currentValue) => previousValue + currentValue
console.log( arr1.reduce(reduce) )
console.log( '------------------------\n' )

console.log(`2) Questao filter + reduce`)
const filteredPar = (value) => value % 2 === 0
console.log( arr1.filter(filteredPar).reduce(reduce) )

console.log( '------------------------\n' )
console.log(`3) Questao filter + reduce`)
const filteredImpar = (value) => value % 2 !== 0
console.log( arr1.filter(filteredImpar).reduce(reduce) )

console.log( '------------------------\n' )
console.log(`4) Questao filter + reduce`)

const arr2 = [1,1,1,2,5,3,3,4,4,8,6]
const howManyTimes = (agg, value) =>{
    if(!agg[value]){
        agg[value] = 0
    }
    agg[value] = agg[value] + 1
    console.log(agg, value)
    return agg
}

const times = arr2.reduce(howManyTimes, {})
console.log(times)
