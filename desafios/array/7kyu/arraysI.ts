/*
    Escreva uma função que recebe uma lista a como parâmetro. A lista a deve ter exatamente
    15 elementos inteiros. ⁠Crie também uma lista b de mesmo tipo, observando a 
    seguinte lei de formação:

    "Todo elemento da matriz b deve ser o quadrado do 
    elemento da matriz a correspondente".

    Retorne a lista b resultante.
*/

const array_a = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 14, 15, 18];
let array_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
export const calculateSquaredList = (list_a: number[], list_b: number[]) => {
    if (list_a.length !== 15) {
        return 'A lista a deve ter exatamente 15 elementos inteiros';
    }

    for (let i = 0; i < list_a.length; i++) {
        if (list_a[i] < 0) {
            return 'A lista a deve ter exatamente 15 elementos inteiros';
        }

        list_b.push(list_a[i] ** 2);
    }

    return list_b;
};

// console.log(calculateSquaredList(array_a, array_b));

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

/*
    Itens para acampar.

    Você e seus amigos decidiram ir acampar. Antes de mais nada fizeram uma lista,
     onde cada amigo deve comprar 5 itens para levar para a viagem.

    Cada amigo ficou responsável por uma seção de itens. As seções são: 
    Higiene, Alimentação, Farmácia e Lazer. 
    Seus amigos devem trazer exatamente cinco itens de cada seção. Todos os itens 
    serão colocados juntos na caixa de suprimentos.

    Cada amigo representa um array e a caixa de suprimentos é a 
    composição destes arrays. Você deve colocar os itens dentro da caixa de 
    forma organizada, separando as seções, afinal de contas, não queremos 
    nossos marshmallows com gosto de desinfetante.

    Condições
    Os amigos não podem comprar mais ou menos do que cinco itens, ou seja, 
    tem que ser exatamente cinco itens.

    Caso alguém compre mais itens ou menos itens, você deverá 
    retornar uma mensagem.
*/

export const checkCampingFeasibility = (): string => {
    let supplyBoxOld: string[][] = [];

    let hygiene: string[] = [
        'Soap',
        'Toothbrush',
        'Toothpaste',
        'Shampoo',
        'Towel',
    ];
    let food: string[] = [
        'Bread',
        'Salt Bread',
        'Sausage',
        'Water',
        'Tomato Sauce',
    ];
    let pharmacy: string[] = [
        'Analgesic',
        'Bandage',
        'Antiseptic',
        'Thermometer',
        'Gaze',
    ];
    let leisure: string[] = ['Ball', 'Deck', 'Jump Rope', 'Sunglasses', 'Book'];

    let supplyBox: string[][] = [hygiene, food, pharmacy, leisure];

    // supplyBoxOld = supplyBoxOld.concat(hygiene, food, pharmacy, leisure);

    if (supplyBox.length < 4) {
        console.log('Algum amigo ainda não retornou com os itens.');
        return 'Não podemos ir acampar.';
    }

    if (supplyBox.length > 4) {
        console.log('Acho que temos um intruso.');
        return 'Não podemos ir acampar.';
    }

    if (supplyBox.length === 4) {
        for (let i = 0; i < supplyBox.length; i++) {
            if (supplyBox[i].length > 5) {
                console.log(
                    `Tem itens demais na seção: ${
                        i + 1
                    }, não precisamos de tantos. Máximo 5.`
                );
                return 'Não podemos ir acampar.';
            }

            if (supplyBox[i].length < 5) {
                console.log(
                    `Precisamos de mais itens da seção ${
                        i + 1
                    }. O certo é 5 itens.`
                );
                return 'Não podemos ir acampar.';
            }
        }
    }

    return 'Podemos acampar!';
};

// console.log(checkCampingFeasibility());

export const countOddPercentualValue = (numbers: number[]) => {
    let totalOdd: number = 0;
    let totalCountArray: number = 0;
    let totalSumOdd: number = 0;

    numbers.forEach((n) => {
        if (n % 2 === 1) {
            totalOdd += 1;
            totalSumOdd += n;
        }
        totalCountArray += 1;
    });

    const percentual = (totalSumOdd / totalCountArray) * 100;

    return `O número total de elementos ímpares existentes é ${totalOdd}, e o percentual do valor total é: ${percentual}`;
};

/*
    Escreva uma função que receba como parâmetro duas listas a e b, cada 
    uma com dez elementos. ⁠A função deve realizar a validação do 
    tamanho da lista. Caso sejam maiores ou menores que 10, retorne: 
    "Lista fora dos padrões necessários".

    A lista a deve ser composta por valores divisíveis por 2 e 3, 
    enquanto a lista b deve ser composta apenar por valores múltiplos de 5.
    ⁠A composição das listas deve ser validada pela função. Caso 
    a composição não esteja correta, retorne: "Valores não permitidos 
    encontrados".
*/

const lista_checkarrays = [2, 3, 4, 6, 8, 9, 10, 12, 14, 16];
const list_b_checkarrays = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

export const checkArraysMultiples = (list1: number[], list2: number[]) => {
    if (list1.length !== 10 || list2.length !== 10) {
        return 'Lista fora dos padrões necessários, devem ser 10 números em cada lista.';
    }

    for (let i = 0; i < list1.length; i++) {
        if (list1[i] % 2 !== 0 && list1[i] % 3 !== 0) {
            return `Lista ${list1} fora dos padrões necessários, lista 1 deve ser divisivel por 2 e 3"`;
        }
    }

    for (let i = 0; i < list2.length; i++) {
        if (list2[i] % 5 !== 0) {
            return `Lista ${list2} fora dos padrões necessários, lista 2 deve ser divisivel por 5`;
        }
    }

    return 'Sucesso.';
};

// console.log(checkArraysMultiples(lista_checkarrays, list_b_checkarrays));
