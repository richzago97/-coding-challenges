// Crie uma função que verifique se a string recebida é um palindromo
export const isPalindrome = (word: string): Boolean => {
    return (
        word.toLowerCase() === word.split('').reverse().join('').toLowerCase()
    );
};

export const isPalindrome2 = (x: string): boolean => {
    const lowerX = x.toLowerCase();
    let start = 0;
    let end = lowerX.length - 1;

    while (start < end) {
        if (lowerX[start] !== lowerX[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

export const isPalindrome3 = (x: string): boolean => {
    const lowerX = x.toLowerCase();
    const length = lowerX.length;

    for (let i = 0; i < length / 2; i++) {
        if (lowerX[i] !== lowerX[length - 1 - i]) {
            return false;
        }
    }

    return true;
};
