/*
    Escreva uma função que receba uma lista a de dimensão 30 composta apenas por 
    números inteiros.
    A função deve retornar a quantidade de valores pares e ímpares existentes na 
    lista recebida.

    Exemplos de saída: ⁠A lista recebida possui x elementos pares e y elementos 
    ímpares.
*/

const list_a: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
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

/*
    Escreva uma função que recebe uma lista b de tamanho 10, composta por números inteiros.⁠
    Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total 
    de números ímpares em relação à quantidade total de elementos armazenados na matriz.
*/

const list_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const countOddPercentualValue = (numbers: number[]) => {
    let totalOdd: number = 0;
    let totalCountArray: number = 0;
    let totalSumOdd: number = 0;

    numbers.forEach((n) => {
        if (n % 2 === 1) {
            totalOdd += 1;
            totalSumOdd += n;
        }
        totalCountArray += 1;
    });

    const percentual = (totalSumOdd / totalCountArray) * 100;

    return `O número total de elementos ímpares existentes é ${totalOdd}, e o percentual do valor total é: ${percentual}`;
};

/*
    Escreva uma função que receba como parâmetro duas listas a e b, cada 
    uma com dez elementos. ⁠A função deve realizar a validação do 
    tamanho da lista. Caso sejam maiores ou menores que 10, retorne: 
    "Lista fora dos padrões necessários".

    A lista a deve ser composta por valores divisíveis por 2 e 3, 
    enquanto a lista b deve ser composta apenar por valores múltiplos de 5.
    ⁠A composição das listas deve ser validada pela função. Caso 
    a composição não esteja correta, retorne: "Valores não permitidos 
    encontrados".
*/

const lista_checkarrays = [2, 3, 4, 6, 8, 9, 10, 12, 14, 16];
const list_b_checkarrays = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

export const checkArraysMultiples = (list1: number[], list2: number[]) => {
    if (list1.length !== 10 || list2.length !== 10) {
        return 'Lista fora dos padrões necessários, devem ser 10 números em cada lista.';
    }

    for (let i = 0; i < list1.length; i++) {
        if (list1[i] % 2 !== 0 && list1[i] % 3 !== 0) {
            return `Lista ${list1} fora dos padrões necessários, lista 1 deve ser divisivel por 2 e 3"`;
        }
    }

    for (let i = 0; i < list2.length; i++) {
        if (list2[i] % 5 !== 0) {
            return `Lista ${list2} fora dos padrões necessários, lista 2 deve ser divisivel por 5`;
        }
    }

    return 'Sucesso.';
};

// console.log(checkArraysMultiples(lista_checkarrays, list_b_checkarrays));
