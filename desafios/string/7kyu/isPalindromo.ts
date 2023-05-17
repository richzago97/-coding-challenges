// Crie uma função que verifique se a string recebida é um palindromo
const isPalindromo = (word: string): Boolean => {
    return word === word.split("").reverse().join("");
}


console.log("A palavra é palindromo?")
console.log(isPalindromo("Arara"));
console.log("****************")
