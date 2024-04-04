/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log("=============================");
/*** USE OF FOR_EACH
 * We cannot use break and continue statement in foreach loop.
 */

movements.forEach((movement, index, array) => {
  console.log(array);
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

/////////////////////////////////////////////////

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

console.log("=============================");

// Since sets doesn't have a key so in this case key === value
const CurrenciesUnique = new Set([
  "United States dollar",
  "Euro",
  "Pound Sterling",
  "INR",
  "INR",
  "INR",
]);

CurrenciesUnique.forEach((value, key, set) => {
  console.log(`${key}: ${value}`);
});
