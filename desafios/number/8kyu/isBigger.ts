/*
    Desenvolva uma função que recebe três variáveis com valores numéricos
    e identifica qual deles é o maior.
*/

export const isBigger = (num1: number, num2: number, num3: number): number => {
    let max = num1;

    if(num2 > max) {
        max = num2
    }

    if (num3 > max){
        max = num3
    }

    return max;
}

export const isBigger2 = (...numbers: number[]): number => Math.max(...numbers);
