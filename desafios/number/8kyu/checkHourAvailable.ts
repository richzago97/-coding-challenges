/*
    Desenvolva uma função com dois parâmetros para saber se o horário corresponde com o 
    funcionamento do /pergunta. O primeiro parâmetro deve-se chamar inicio, e o 
    segundo deve-se chamar termino. Se o horário de inicio for maior ou igual a 11 e 
    menor ou igual a 19, retorne "O /pergunta está em horário de funcionamento."
    Caso contrário retorne "O /pergunta não está em horário de funcionamento."
*/
export const checkHourAvailable = (inicio: number, termino: number): string => {
    if (inicio >= 11 && termino <= 19) {
        return "O /pergunta está em horário de funcionamento";
    }
    return "O /pergunta não está em horário de funcionamento";
};