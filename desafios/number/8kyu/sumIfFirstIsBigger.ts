/*
    Desenvolva uma função que some dois números passados por parâmetro. 
    A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
    Caso contrário você deverá retornar a seguinte frase: 
    "O primeiro número não é maior que o segundo."
*/
export const sumIfFirstIsBigger = (num1: number, num2: number): number | string => {

    if (num1 > num2) {
        return num1 + num2;
    } else {
        return "O primeiro número não é maior que o segundo!";
    }
};