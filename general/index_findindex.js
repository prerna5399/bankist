/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////

/** FIND METHOD */
// Filter method return all the condition that matches the condition while the find method return the first
// To retrieve the element of the array
const firstWithrawal = movements.find((mov) => mov < 0);
// console.log(firstWithrawal);

const account = accounts.find((acc) => acc.owner === "Jonas Schmedtmann");
// console.log(account);

/** FIND-INDEX METHOD */
// It works the same as the find method it just return the index of the found element.
