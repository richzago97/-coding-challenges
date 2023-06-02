/*
    You are the greatest chef on earth. No one boils eggs like you! Your 
    restaurant is always full of guests, who love your boiled eggs. 
    But when there is a greater order of boiled eggs, you need some time, 
    because you have only one pot for your job. How much time do you need?

    Your Task

    Implement a function, which takes a non-negative integer, representing 
    the number of eggs to boil. It must return the time in minutes (integer),
    which it takes to have all the eggs boiled.

    Rules
    you can put at most 8 eggs into the pot at once
    it takes 5 minutes to boil an egg
    we assume, that the water is boiling all the time (no time to heat up)
    for simplicity we also don't consider the time it takes to put eggs 
    into the pot or get them out of it
    
    Example (Input --> Output)
    0 --> 0
    5 --> 5
    10 --> 10

*/

export function cookingTime(eggs: number): number {
   return Math.ceil(eggs / 8) * 5;
}

/*
    DESCRIPTION:
        In this kata you will have to write a function that takes litres and
        pricePerLitre (in dollar) as arguments.

        Purchases of 2 or more litres get a discount of 5 cents per litre, 
        purchases of 4 or more litres get a discount of 10 cents per litre,
        and so on every two litres, up to a maximum discount of 25 cents per litre.
        But total discount per litre cannot be more than 25 cents. Return
        the total cost rounded to 2 decimal places. Also you can guess that there
        will not be negative or non-numeric inputs.

    Good Luck!

    Note
    1 Dollar = 100 Cents
*/

export const fuelPrice = (litres: number, pricePerLitre: number): number => {
   let totalCost = litres * pricePerLitre;
   let discount = 0;

   if (litres >= 10) {
      discount = 0.25;
   } else {
      discount = Math.floor(litres / 2) * 0.05;
   }

   totalCost = (pricePerLitre - discount) * litres;

   totalCost = parseFloat(totalCost.toFixed(2));

   return totalCost;
};

/*
    Return an array containing the numbers from 1 to N, where N is the parametered value.

    Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
    N will never be less than 1.
*/

export function fizzbuzz(n: number) {
   let result: Array<string | number> = [];
   for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         result.push("FizzBuzz");
      } else if (i % 3 === 0) {
         result.push("Fizz");
      } else if (i % 5 === 0) {
         result.push("Buzz");
      } else {
         result.push(i);
      }
   }
   return result;
}

/*
    As a part of this Kata, you need to create a function that when provided with a triplet,
     returns the index of the numerical element that lies between the other two elements.

    The input to the function will be an array of three distinct numbers (Haskell: a tuple).

    For example:

    gimme([2, 3, 1]) => 0
    2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

    Another example (just to make sure it is clear):

    gimme([5, 10, 14]) => 1
    10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

export function gimme(triplet: number[]): number {
   if (
      (triplet[0] < triplet[1] && triplet[0] > triplet[2]) ||
      (triplet[0] > triplet[1] && triplet[0] < triplet[2])
   ) {
      return 0;
   } else if (
      (triplet[1] < triplet[0] && triplet[1] > triplet[2]) ||
      (triplet[1] > triplet[0] && triplet[1] < triplet[2])
   ) {
      return 1;
   } else {
      return 2;
   }
}
