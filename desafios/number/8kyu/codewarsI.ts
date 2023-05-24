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

/*
    This kata is about multiplying a given number by eight if it is an even number 
    and by nine otherwise.
*/

export function simpleMultiplication(num: number): number {
    let result: number = 0;
    if (num % 2 === 0) {
        result = num * 8;
    } else if (num % 2 === 1) {
        return (result = num * 9);
    }
    return result;
}

/*
    Story:
        You are going to make toast fast, you think that you should make multiple pieces of 
        toasts and once. So, you try to make 6 pieces of toast.

    Problem:
        You forgot to count the number of toast you put into there, you don't know if you 
        put exactly six pieces of toast into the toasters.

        Define a function that counts how many more (or less) pieces of toast you need in 
        the toasters. Even though you need more or less, the number will still be positive,
         not negative.

    Examples:
        You must return the number of toast the you need to put in (or to take out). In case of 5
         you can still put 1 toast in:

        six_toast(5) == 1
        And in case of 12 you need 6 toasts less (but not -6):

        six_toast(12) == 6
*/

export function sixToast(num: number): number {
    if (num < 6) {
        return 6 - num;
    }
    return num - 6;
}

export function sixToast2(num: number): number {
    return Math.abs(num - 6);
}

/*
    Philip's just turned four and he wants to know how old he will be in various 
    years in the future such as 2090 or 3044. His parents can't keep up calculating 
    this so they've begged you to help them out by writing a programme that can answer 
    Philip's endless questions.

    Your task is to write a function that takes two parameters: the year of birth and 
    the year to count years in relation to. As Philip is getting more curious every day 
    he may soon want to know how many years it was until he would be born, so your function 
    needs to work with both dates in the future and in the past.

    Provide output in this format: For dates in the future: "You are ... year(s) old." 
    For dates in the past: "You will be born in ... year(s)." If the year of birth equals 
    the year requested return: "You were born this very year!"

    "..." are to be replaced by the number, followed and proceeded by a single space. 
    Mind that you need to account for both "year" and "years", depending on the result.

    Good Luck!
*/

export function calculateAge(birthDate: number, year: number): string | void {
    let sumYear = 0;

    if (birthDate === year) {
        return "You were born this very year!";
    }

    if (birthDate > year) {
        sumYear = birthDate - year;
        if (sumYear === 1) {
            return `You will be born in ${sumYear} year.`;
        }

        return `You will be born in ${sumYear} years.`;
    }

    if (birthDate < year) {
        sumYear = year - birthDate;

        if (sumYear === 1) {
            return `You are ${sumYear} year old.`;
        }
        return `You are ${sumYear} years old.`;
    }
}

/*
    You are given two interior angles (in degrees) of a triangle.

    Write a function to return the 3rd.

    Note: only positive integers will be tested.
*/

export const otherAngle = (a: number, b: number): number => {
    let sum = a + b;
    let sub = 180 - sum;

    return sub;
};
