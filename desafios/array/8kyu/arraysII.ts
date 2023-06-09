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

/*
    Write a function to get the first element(s) of a 
    sequence. Passing a parameter n (default=1) will return 
    the first n element(s) of the sequence.

    If n == 0 return an empty sequence []
*/

export function first(arr: Array<number | string>, n = 1) {
   if (n === 0) {
      return [];
   }

   return arr.slice(0, n);
}

export function first2(arr: Array<number | string>, n = 1) {
   if (n === 0) {
      return [];
   }

   if (n > arr.length) {
      n = arr.length;
   }

   let result: Array<number | string> = [];
   for (let i = 0; i < n; i++) {
      result.push(arr[i]);
   }

   return result;
}
