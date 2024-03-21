/////////////////////////////////////////////
// EVENT PROPAGATION: BUBBLING AND CAPTURING
////////////////////////////////////////////

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},
${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);

  // stop propogation (not a good practice)

  //   e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

// To capture the event pass true as the second parameter
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
  },
  true
);
