/*
    Parse nice int from char problem

    You ask a small girl,"How old are you?" She always says, "x years old", 
    where x is a random number between 0 and 9.

    Write a program that returns the girl's age (0-9) as an integer.

    Assume the test input string is always a valid string. For example, the test 
    input may be "1 year old" or "5 years old". The first character in the string 
    is always a number.
*/

export function get_age(age: string): number {
    return Number(age[0]);
}

/*
    Complete the function that takes a non-negative integer n as input,
    and returns a list of all the powers of 2 with the exponent 
    ranging from 0 to n ( inclusive ).

    Examples
    n = 0  ==> [1]        # [2^0]
    n = 1  ==> [1, 2]     # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

export function powersOfTwo(n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
        //result.push(Math.pow(2, i));
    }

    return result;
}

/* 
    Count Odd Numbers below n

    Given a number n, return the number of positive odd 
    numbers below n
*/

export function oddCount(n: number): number {
    const result = Math.floor(n / 2);
    // const result = ~~(n / 2);
    return result;
}

/*
    Summation
    Write a program that finds the summation of every 
    number from 1 to num. The number will always be 
    a positive integer greater than 0.
*/

export const summation = (num: number) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
};
