/*
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
*/

export const getCount = (str: string): number => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
        ) {
            count++;
        }
    }
    return count;
};

export const getCount2 = (str: string): number => {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
};

/*
    Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels
     from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string
     with all vowels removed.

    For example, the string "This website is for losers LOL!" would
    become "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.
*/

export const disemvowel = (str: string): string => {
    let vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            newStr += "";
        } else {
            newStr += str[i];
        }
    }

    return newStr;
};

export const disemvowel2 = (str: string): string => {
    let vowels: string[] = ["a", "e", "i", "o", "u"];

    let newStr = str
        .split("")
        .map((letter) => (vowels.includes(letter.toLowerCase()) ? "" : letter))
        .join("");

    return newStr;
};
