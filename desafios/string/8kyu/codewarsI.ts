/*
    If you can't sleep, just count sheep!!

    Task:
    Given a non-negative integer, 3 for example, return a string with a murmur:
    "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative 
    integers.
*/

export function countSheep(num: number): string {
   let result: string = "";
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
   return s.split(" ");
}

export function areYouPlayingBanjo(name: string): string {
   let nameLower = name[0].toLocaleLowerCase();
   return nameLower == "r"
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
   let result = "";
   for (let i = 0; i < x.length; i++) {
      if (x[i] < "5") {
         result += "0";
      } else if (x[i] >= "5") {
         result += "1";
      }
   }

   return result;
};

/*
    This function should test if the factor is a factor of base.

    Return true if it is a factor or false if it is not.

    About factors
    Factors are numbers you can multiply together to get another number.

    2 and 3 are factors of 6 because: 2 * 3 = 6

    You can find a factor by dividing numbers. If the remainder is 0 then the
    number is a factor.
    You can use the mod operator (%) in most languages to check for 
    a remainder
*/

export function checkForFactor(base: number, factor: number) {
   return base % factor === 0;
}

/*
    DESCRIPTION:
    Implement a function which convert the given boolean value into its 
    string representation.

    Note: Only valid inputs will be given.

    
*/

export const booleanToString = (b: boolean): string => {
   return b.toString();
};

/*
    Create a function that accepts a string and a single character, and returns an
    integer of the count of occurrences the 2nd argument is found in the first one.

    If no occurrences can be found, a count of 0 should be returned.

    ("Hello", "o")  ==>  1
    ("Hello", "l")  ==>  2
    ("", "z")       ==>  0
    str_count("Hello", 'o'); // returns 1
    str_count("Hello", 'l'); // returns 2
    str_count("", 'z'); // returns 0
    Notes
    The first argument can be an empty string
    In languages with no distinct character data type, the second argument will be 
    a string of length 1

*/

export function strCount(str: string, letter: string): number {
   let count = 0;
   for (let i = 0; i <= str.length; i++) {
      if (str[i] === letter) {
         count++;
      }
   }
   return count;
}

export function strCount2(str: string, letter: string): number {
   return str.split("").filter((value) => value == letter).length;
}
