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
