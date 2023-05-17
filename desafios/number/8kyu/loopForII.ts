/*
    Escreva uma função que apresente como resultado os quadrados dos números inteiros 
    existentes na faixa de valores de 15 a 200.
*/

const squareIntegers = () => {
    for(let i = 15; i <= 200; i++){
        const square = i * i
        console.log(square)
    }
}

/*
    Escreva uma função que apresente a soma dos cem primeiros números naturais.
*/

const sumFirstHundredNumbers  = () => {
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        sum += i
    }
    return sum
}

/*
    Escreva uma função que apresente todos os valores numéricos menores que 200 
    que são divisíveis por 4.
*/

const numbersDivisibleByFour  = () => {
    for(let i = 0; i < 200; i++){
        if(i % 4 == 0){
            console.log(i)
        }
    }
}

/*
    Escreva uma função que calcule o resultado da soma e da média aritmética dos valores 
    pares situados na faixa numérica de 50 até 70.
*/
const calculateSumAndAverage = () => {
    let sum = 0
    let count = 0
    for(let i = 50; i <= 70; i++){
        if(i % 2 == 0){
            sum += i
            count++
        }
    }
    const media_arit = sum / count 

    console.log(`A soma é ${sum} e a média é ${media_arit}.`);
}





