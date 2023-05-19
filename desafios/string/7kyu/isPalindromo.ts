// Crie uma função que verifique se a string recebida é um palindromo
export const isPalindromo = (word: string): Boolean => {
    return word === word.split("").reverse().join("");
};
