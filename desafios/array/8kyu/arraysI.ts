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

export const checkPositionExists = (value: number): string => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[value]){
            return arr[value]
        }
    }
    return "Valor não encontrado"
}

export const checkPositionExists2 = (value: number): string => {
    let result: string = "Valor não encontrado"
    arr.forEach((item, index) => { 
        if(index === value){
          result = item
        }
    })
    return result
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
    return "";
}




