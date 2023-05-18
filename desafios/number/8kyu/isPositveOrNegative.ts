/*
    Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor 
    de caractere P se o parâmetro for positivo,
    e N se o parâmetro for zero ou negativo.
*/

export const isPositiveOrNegative = (number: number): string => {
    if(number >= 0) {
        return "P"
    }
    return "N"
}

export const isPostiveOrNegative2 = (num: number):string => (num > 0 ? "P": "N");
