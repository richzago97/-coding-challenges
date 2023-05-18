/*
    Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres.
    Insira o valor recebido em um array e retorne o array gerado.
*/

export const myArrMinFive = (value: string): string[] => {
    if(value.length >= 5){
        return [value]
    }
    return [];
}

export const myArrMinFive2 = (value: string): string[] => {
    const array: string[] = [];
    if(value.length >= 5){
        array.push(value);
    }
    return array
}

/*
    Escreva uma função que recebe um valor do tipo number. Use o valor 
    recebido para acessar uma posição do seguinte array:

    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠

    Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja 
    acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado".
*/
let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];

export const checkPositionExists = (pos: number): string => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[pos]){
            return arr[pos]
        }
    }
    return "Valor não encontrado"
}


export const checkPositionExists2 = (pos: number): string => {
    let result: string = "Valor não encontrado"
    arr.forEach((item, index) => { 
        if(index === pos){
            result = item
        }
    })
    return result
}

export const checkPositionExists3 = (pos: number): string => {
    const value = arr[pos]

    if(value){
        return value
    }

    return "Valor não encontrado."
}

/*
    Crie um array de números, contendo os valores de 1 a 10. Crie uma função que 
    recebe um número inteiro.

    Acesse a posição do array de números usando o valor recebido. Teste se o
    valor contido na posição é par ou ímpar.

    Caso seja par retorne: "O valor encontrado nesta posição é par",
    Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".
*/

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const isPositionEvenOrOdd = (num: number): string => {
    let result = 0
   for(let i = 0; i < numbersArray.length; i++){
    if(numbersArray[i] === numbersArray[num]){
        result = numbersArray[i]
        if(result % 2 === 0){
            return "O valor encontrado nessa posição é par"
        }else{
            return "O valor encontrado nessa posição é impar"
        }
    }
   }
   return "Valor não encontrado!"
}

export const isPositionEvenOrOdd2 = (position: number): string => {
    const value = numbersArray[position];
    
    if (value % 2 === 0) {
      return "O valor encontrado nesta posição é par";
    } else if(value % 2 === 1) {
      return "O valor encontrado nesta posição é ímpar";
    } else {
        return "Valor não encontrado!"
    }
  };

  const namesArray = ["Pedro", "Rafael", "José"]

export const checkBiggerName = (names: string[]): string => {
    let biggerName = names[0]
    let index = 0;
    for(let i = 0; i < namesArray.length; i++){
        if(names[i].length > biggerName.length){
            biggerName = names[i];
            index = i;
        }
    }
    return `O nome ${biggerName} é o maior da lista, e seu indice é ${index}`
}

export const checkBiggerName2 = (names: string[]): string => {
    let biggerName = names[0]
    let index = 0

    names.forEach((name, currentIndex) => {
        if(name.length > biggerName.length){
            biggerName = name
            index = currentIndex
        }
    })
    return `O nome ${biggerName} é o maior da lista, e seu indice é ${index}`
}

let numbers = [1,4,6,9,11,10]
export const sumLastTwoPositionsMutipleOfTwo = (values: number[]): string => {
    let lastPosition = values.length - 1
    let secondLastPosition = values.length - 2

    const sumLastPosition = values[lastPosition]
    const sumSecondLastPosition = values[secondLastPosition]

    const totalSum = sumLastPosition + sumSecondLastPosition

    if(totalSum % 2 === 0){
        return `A soma ${totalSum} é um múltiplo de 2`
    }
        return `A soma ${totalSum} não é um múltiplo de 2`
}



