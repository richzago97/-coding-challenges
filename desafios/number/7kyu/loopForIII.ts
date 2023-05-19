/*
  Escrever uma função chamada fibonacciNumbers(). A função quando 
  chamada deve apresentar os valores da sequência numérica de 
  Fibonacci até o décimo quinto termo.

  A sequência de Fibonacci é formada por:

  ⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.

  Obtendo-se o termo seguinte a partir da soma do termo atual com o termo anterior, e assim sucessivamente.

  Utilize para este exercício as variáveis

  ATUAL -> Representa o valor atual do contador do laço.
  ANTERIOR -> Representa o valor anterior do contador.
  PRÓXIMO -> Representa o valor seguinte do contador.
*/

export const fibonacciNumbers = (): void => {
  let atual: number = 1;
  let anterior: number = 0;

  for (let i = 1; i <= 15; i++) {
    console.log(anterior);
    const proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
  }
};

/*
  Escreva uma função que apresenta os valores numericos de Fibonnaci
*/

export const fibonacci = (n: number): number[] => {
  const sequence: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    const num = sequence[i - 1] + sequence[i - 2];
    sequence.push(num);
  }
  return sequence;
};

/*
  Escrever um programa que calcule e apresente o somatório do número de
  grãos de trigo que se pode obter num tabuleiro de xadrez, 
  obedecendo à seguinte regra:

  Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o
  dobro do quadro anterior.

  Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro 
  colocam-se dois grãos (neste momento, tem-se três grãos), no 
  terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos),
  no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) 
  até o limite de casas que é 64. A quantidade de grãos adicionados 
  é sempre o dobro da quantidade anterior.
*/

export const sumGrains = (): number => {
  let totalGrains: number = 0;
  let grainsBoardCurrent: number = 1;
  for (let i = 1; i <= 64; i++) {
    totalGrains += grainsBoardCurrent;
    grainsBoardCurrent *= 2;
  }
  return totalGrains;
}


