///////////////////////////////////////////
// TYPE OF EVENT AND  EVENTS HANDLERS
///////////////////////////////////////////

const h1 = document.querySelector('h1');

const mouseenter = function (e) {
  alert('You are reading the heading');
  //   h1.removeEventListener('mouseenter', mouseenter);
};
h1.addEventListener('mouseenter', mouseenter);

setTimeout(() => h1.removeEventListener('mouseenter', mouseenter), 3000);
