/*
    Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar 
    palavra, e o segundo deve se chamar letra. Se a palavra passada no 
    primeiro parâmetro começar com a letra passada como segundo 
    parâmetro, retorne true. Se a palavra passada no primeiro 
    parâmetro não começar com a letra passada no segundo parâmetro, 
    retorne false.
*/
export const startsWithLetter = (palavra: string, letra: string): boolean => {
    return palavra[0] === letra[0];
};
