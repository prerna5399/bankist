/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/***** MAP,FILTER,REDUCE (Theorey in notes)*****/

// MAPS

const eurToUsd = 1.1;

// This is more use when we use functional programming
const movementNew = movements.map(function (movement) {
  // return 23;
  return movement * eurToUsd;
});
console.log(movementNew);

const movementForUs = [];
for (const mov of movements) movementForUs.push(mov * eurToUsd);
console.log(movementForUs);

// using arrow function

const movementNewArrow = movements.map((movement) => movement * eurToUsd);
console.log(movementNewArrow);

const movementDescription = movements.map(
  (movement, index, arr) =>
    `Movement ${index + 1} You ${
      movement > 0 ? "deposited" : "withdrew"
    } ${Math.abs(movement)}`
);

console.log(movementDescription);
