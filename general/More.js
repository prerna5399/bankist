/////////////////////////////////////////////////
// MORE WAYS OF CREATING AND FILLING ARRAY
/////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];
console.log(new Array(1, 2, 3, 4));

//////////////////////////////////////////////////////////////////////////////////////////////////
// new Array() method will create an array with 7 empty spaces(When we pass only one args with it)
//////////////////////////////////////////////////////////////////////////////////////////////////

const x = new Array(7);

// fill(value,start Index,End Index). Will Not include the last number
x.fill(5);
x.fill(2, 4, 5);
console.log(x);
console.log(arr.fill(4));

///////////////////////////////////////
// Array.from()
// Array.from({ length: mapping }, () => 1);
// This can be used to create a array like structure into real array
//////////////////////////////////////

const fromArr = Array.from({ length: 7 }, () => 1);
console.log(fromArr);

// const a = Array.from({ length: 7 }, (cur, i) => i + 1);
// since we are not using the first parameter so we can use throw away parameter (-)
const a = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(a);

const dice = Array.from(
  { length: 100 },
  (_, i) => Math.trunc(Math.random() * 6) + 1
);
console.log(dice);

labelBalance.addEventListener("click", function (e) {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );

  console.log(movementsUI);
  //   const currMovement =
  //   console.log(movementsUI.map((el) => el.textContent.replace("€", "")));
});
