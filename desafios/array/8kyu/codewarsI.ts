/*
     Lost Without a Map

     Given an array of integers, return a new array 
     with each value doubled.

    For example:

    [1, 2, 3] --> [2, 4, 6]
*/

export function maps(x: number[]): number[] {
    let result = x.map((elem) => elem * 2);

    return result;
}

export function positiveSum(arr: number[]): number {
    let result: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }

    return result;
}

export function positivSum2(arr: number[]): number {
    return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e, 0);
}

/*
    Given an array of integers.

    Return an array, where the first element is the count of positives
    numbers and the second element is sum of negative numbers. 
    0 is neither positive nor negative.

    If the input is an empty array or is null, return an empty array.

    Example:

    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
    you should return [10, -65].
*/

export function countPositivesSumNegatives(input: any) {
    let countPositive: number = 0;
    let sumNegative: number = 0;
    let result: number[] = [];

    if (!input) {
        return [];
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            countPositive++;
        } else if (input[i] < 0) {
            sumNegative += input[i];
        }
    }

    if (countPositive === 0 && sumNegative === 0) {
        return [];
    }
    result.push(countPositive, sumNegative);

    return result;
}

/*
    Complete the square sum function so that it squares 
    each number passed into it and then sums the 
    results together.
*/

export function squareSum2(numbers: number[]): number {
    return numbers.reduce((acc, cv) => acc + cv ** 2, 0);
}

export function squareSum(numbers: number[]): number {
    let result: number = 0;

    numbers.forEach((num) => {
        result += num ** 2;
    });

    return result;
}

/*
    Write a function that takes an array of numbers and returns the sum of the numbers.
     The numbers can be negative or non-integer. 
     If the array does not contain any numbers then you should 
     return 0.
*/

function sum(numbers: number[]): number {
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
}

function sum2(numbers: number[]): number {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

/*
    
    Find Maximum and Minimum Values of a List

    Your task is to make two functions ( max and min, or maximum and minimum, etc., 
    depending on the language ) that receive a list of integers as input, and return 
    the largest and lowest number in that list, respectively.
*/

export const min = (list: number[]): number => {
    let result = list.reduce((acc, cv) => Math.min(acc, cv));
    return result;
};

export const max = (list: number[]): number => {
    let result = list.reduce((acc, cv) => Math.max(acc, cv));
    return result;
};

export const min2 = (list: number[]): number => {
    let lessValue = list[0];
    // let lessValue = Infinity;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < lessValue) {
            lessValue = list[i];
        }
    }
    return lessValue;
};

export const max2 = (list: number[]): number => {
    let biggerValue = list[0];
    //let BiggerValue = -Infinity
    for (let i = 0; i < list.length; i++) {
        if (list[i] > biggerValue) {
            biggerValue = list[i];
        }
    }
    return biggerValue;
};

/*
    You take your son to the forest to see the monkeys. You know that there are a certain number there
     (n), but your son is too young to just appreciate the full number, he has to start 
     counting them from 1.

    As a good parent, you will sit and count with him. Given the number (n), populate an 
    array with all numbers up to and including that number, but excluding zero.

    For example(Input --> Output):

    10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    1 --> [1]
*/
export function monkeyCount(n: number): number[] {
    let result: number[] = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

/*
    DESCRIPTION:
    Write a method, that will get an integer array as parameter and will process every number 
    from this array.

    Return a new array with processing every number of the input-array like this:

    If the number has an integer square root, take this, otherwise square the number.

    Example
    [4,3,9,7,2,1] -> [2,9,3,49,4,1]
    Notes
    The input array will always contain only positive numbers, and will 
    never be empty or null.
*/

export function squareOrSquareRoot(array: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < array.length; i++) {
        let root = Math.sqrt(array[i]);

        if (root % 1 === 0) {
            result.push(root);
        } else {
            let square = array[i] * array[i];
            result.push(square);
        }
    }

    return result;
}

export const squareOrSquareRoot2 = (array: number[]): number[] => {
    return array.map((elem) =>
        Math.sqrt(elem) % 1 == 0 ? Math.sqrt(elem) : elem * elem
    );
};
