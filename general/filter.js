/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// return a new array where cond is true
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

const depositfor = [];
for (const movement of movements) {
  if (movement > 0) depositfor.push(movement);
}
console.log(depositfor);

const deposit1 = movements.filter((mov) => mov > 0);
console.log(deposit1);
