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
