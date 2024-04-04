/////////////////////////
// ARRAY METHOD PRACTICE
/////////////////////////

// 1.

// const bandDespositSum = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .filter((mov) => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bandDespositSum);

const bandDespositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bandDespositSum);

// 2.

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000);

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((counter, cur) => (cur >= 1000 ? counter + 1 : counter), 0);
console.log(numDeposits1000);

// 3

const { deposit, withdrawal } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, cur) => {
      //cur > 0 ? (sum.deposit += cur) : (sum.withdrawal += cur);
      sum[cur > 0 ? "deposit" : "withdrawal"] += cur;
      return sum;
    },
    { deposit: 0, withdrawal: 0 }
  );

console.log(deposit, withdrawal);

//4.)
// Convert into the title case string: this is a nice title-> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const exception = ["a", "an", "and", "the", "but", "or", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exception.includes(word) ? word : capitalize(word)))
    .join(" ");

  return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
