// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
//  Use the spread operator to combine these arrays into a single array sorted in ascending order,
//   then log the result.

let set1 = [ 1200 ,1500 ,2000]
let set2 = [ 1500 , 1700 ,1900]

let combineSet = [...set1 ,...set2].sort((a , b) => (a - b));

console.log(combineSet);