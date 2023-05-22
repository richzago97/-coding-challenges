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
