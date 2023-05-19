/*
    Escreva uma função que consiga inserir novos elementos em uma lista. 
    A lista pode armazenar no máximo 10 elementos.
    ⁠Elementos do tipo string com mais de 7 caracteres não são permitidos.

    Em caso de sucesso, retorne: "Elemento inserido com sucesso, a lista agora é: x"
    sendo x lista atualizada.

    Em caso de falha, retorne: "Não foi possível inserir este valor"
*/

export const pushElementsMax7String = (
    list: string[],
    ...newElements: string[]
): string => {
    for (let i = 0; i < newElements.length; i++) {
        const newElement = newElements[i];

        if (typeof newElement === 'string' && newElement.length > 7) {
            return 'Elemento com mais de 7 caracteres não é permitido';
        }

        if (list.length >= 10) {
            return 'Não é possível inserir o valor em uma lista com mais de 10 elementos';
        }

        list.push(newElement);
    }

    return `Elemento(s) inserido(s) com sucesso, a lista agora é: ${list.join(
        ', '
    )}`;
};

// const minhaLista: string[] = ['Richard'];
// console.log(pushElementsMax7String(minhaLista, 'George'));
// console.log(pushElementsMax7String(minhaLista, 'Teste', 'Teste 2'));
