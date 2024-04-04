"use script";

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/***** REDUCE *****/

// accumulator will keep accumulating the value that it will return
const balance = movements.reduce(function (accumate, curr, i, arr) {
  return accumate + curr;
}, 0);

// 0 is the initial value of the accumlator
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;

console.log(balance2);

const balance3 = movements.reduce((acc, mov, i, arr) => acc + mov, 0);
console.log(balance3);

// Max value

const maxValue = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maxValue);
