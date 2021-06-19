//JS 
/*
I've been to a restaurant to order some food, but I've forgotten what I ordered in the past. I only remember how much money I spent.
From the following menu, and list of receipt values, determine what I could have ordered.
*/
let menuItems = {
  "veggie sandwich": 6.85,
  "extra veggies": 2.20,
  "chicken sandwich": 7.85,
  "extra chicken": 3.20,
  "cheese": 1.25,
  "chips": 1.40,
  "nachos": 3.45,
  "soda": 2.05,
};
//The Receipts:
// const receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00];

// get object entries form menuitems
// loop over to check for the FIRST combination of items that matches the reciept exactly
// 

// Refine the assumption:
// multiple veggie sandwhich has priority over one veggie sandwhich veggie and chicken sandwhich
// .find() conditional: multiples don't divide down to 0
// use modulo %
// is reciept % currentItem === 0 ? true add to object,
// false:
// 1. Check the remainder, loop over remaining entries for exact match
// 2. Move on
// return a custom object 
// const result = {
//   "totalItems": 4,
//   "veggie sandwhich": 4
// }

// Not looping uncessarily

/*
Constraints:
- you must use 100% of the receipt value, we don't want any money left over
// keep quantity in mind
- you can order any quantity of any menu item
- none of the receipt values are "tricks", they all have answers

The Challenge:
Find the first combination of food that adds up to the receipt total, print out only one combination for that receipt, and move on to the next receipt.

The output format is up to you, but here are some examples:
4.85:
3 items, extra veggies, chips, cheese
13.75:
3 items, {'veggie sandwich': 1, 'nachos': 2}

Extension:
Refactor your first algorithm to examine many matching combinations for each receipt to find the combination with the fewest total number of items purchased.
Each receipt, except the $75 receipt, has only one best answer.
Example:
4.85 receipt has three possible combinations:
- best: nachos, chips (2 total items)
- extra veggies, chips, cheese (3 total times)
- chips, chips, soda (3 total items)
*/

// track the current total as we defined menu items

// const mock = [4.85];

export const guessReciept = total => {
  const allMenuItems = Object.entries(menuItems);
  console.log(allMenuItems);
  const attempt = allMenuItems.reduce((guess, item, index) => {
    if (total === 0) return guess;
    if (total % item[1] === 0) {
      guess[item[0]] = Math.floor(total / item[1]);
      guess.totalItems++;
      total = total % item[1]; 
    }
    // if (Object.values(menuItems).find(price => total % item[1] === price)) {
    //   const nextFit = 
    //   guess[item[0]] = Math.floor(total / item[1]);
    //   guess.totalItems++;
    //   total = total % item[1];

    //   guess.totalItems++;
    //   total = 
    // }
    return guess;
  }, {
    'totalItems': 0
  })
  return attempt;
}