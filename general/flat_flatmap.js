/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [[200, 450], [-400, 3000, -650], -130, 70, 1300];

/////////////////////////////////////////////////

/** FLAT AND FLAT-MAP */
// Removes the nested array
console.log(movements.flat());

// 2 is the dept used t fixed the secoond level of nesting
// const movements2 = [[200, 450], [[-400, 3000], -650], -130, [70, 1300]];
// console.log(movements2.flat(2));

// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, all) => acc + all, 0);

// console.log(overallBalance);
// // *********************flatMap comines both flat and flatMap also it doesn't have a depth value

// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, all) => acc + all, 0);

// console.log(overallBalance2);
