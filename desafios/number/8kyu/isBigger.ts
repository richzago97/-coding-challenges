/*
    Desenvolva uma função que recebe três variáveis com valores numéricos
    e identifica qual deles é o maior.
*/

const isBigger = (num1: number, num2: number, num3: number): number => {
    let max = num1;

    if(num2 > max) {
        max = num2
    }

    if (num3 > max){
        max = num3
    }

    return max;
}

const isBigger2 = (...numbers: number[]): number => Math.max(...numbers);

console.log("Maior numero")
console.log(isBigger(10, 20, 30));
console.log("****************")

console.log(isBigger2(10, 20, 30))
console.log("****************")