/*
    If you can't sleep, just count sheep!!

    Task:
    Given a non-negative integer, 3 for example, return a string with a murmur:
    "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative 
    integers.
*/

export function countSheep(num: number): string {
    let result: string = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }

    return result;
}

/* 
    Write a function to split a string and convert 
    it into an array of words.
*/
export function stringToArray(s: string): string[] {
    return s.split(' ');
}

export function areYouPlayingBanjo(name: string): string {
    let nameLower = name[0].toLocaleLowerCase();
    return nameLower == 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
}

/*
    You're at the zoo... all the meerkats look weird. Something has gone terribly
    wrong - someone has gone and switched their heads and tails around!

    Save the animals by switching them back. You will be given an array which
    will have three values (tail, body, head). It is your job to re-arrange the 
    array so that the animal is the right way round (head, body, tail).

    Same goes for all the other arrays/lists that you will get in the tests: you have to change
    the element positions with the same exact logics
*/

export function fixTheMeerkat(arr: string[]): string[] {
    return [arr[2], arr[1], arr[0]];
    //return arr.reverse()
}

export const fakeBin = (x: string): string => {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < '5') {
            result += '0';
        } else if (x[i] >= '5') {
            result += '1';
        }
    }

    return result;
};
