/*
    Escreva uma função que receba uma lista a de dimensão 30 composta apenas por 
    números inteiros.
    A função deve retornar a quantidade de valores pares e ímpares existentes na 
    lista recebida.

    Exemplos de saída: ⁠A lista recebida possui x elementos pares e y elementos 
    ímpares.
*/

const list_a: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30
];

export const countEvenOdd = (numbers: number[]): string => {
    let countEven: number = 0;
    let countOdd: number = 0;

    numbers.forEach((number) => {
        if (number % 2 === 0) {
            countEven += 1;
        } else {
            countOdd += 1;
        }
    });

    return `A lista recebida possui ${countEven}elementos pares e ${countOdd}ímpares existentes na lista recebida.
    `;
};

export const countEvenOdd2 = (numbers: number[]) => {
    let countEven: number = 0;
    let countOdd: number = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
    return `A lista recebida possui ${countEven} elementos pares e ${countOdd}
    ímpares existentes na lista recebida.
    `;

};



