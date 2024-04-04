/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// EQUALITY
console.log(movements.includes(1300));

// CONDITION :- Even if one condition pass the condition can return true
const deposit = movements.some((mov) => mov > 500);
console.log(deposit);

// Every :- Only return true if all of the element pass that condition

console.log(account4.movements.every((mov) => mov > 0));
