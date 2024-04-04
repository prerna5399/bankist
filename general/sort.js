/////////////////////////////////////////////////
/////////////////////////////////////////////////

const owner = ["Jack", "Daniel", "Rohit", "Peter"];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SORTING OF ARRAYS

// This will mutate the original array
console.log(owner.sort());
// console.log(movements.sort());

// return < 0, A, B
// return > 0, B, A
movements.sort((a, b) => (b < a ? 1 : -1));
// movements.sort((a, b) => a - b);
// movements.sort((a, b) => b - a);
console.log(movements);
// console.log(final1);
// console.log(fina2);
