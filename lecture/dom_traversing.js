/////////////////////////////////////////////
// DOM TRAVERSING
////////////////////////////////////////////

const h1 = document.querySelector('h1');

// ************* quearySelector() also work with elements:( Going downwards: select child) ********** //
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'pink';
h1.lastElementChild.style.color = 'blue';

// ********** querySelector() also work with elements:( Going upwards: parents) ********* //

console.log(h1.parentNode);
console.log(h1.parentElement);

// Closest element to the h1 is returned
h1.closest('.header').style.background = 'var( --color-secondary)';
h1.closest('h1').style.background = 'var( --color-primary)';

// ****** Going Sideways : siblings (only above and below siblings can be accessed) ***** //

console.log(h1.parentElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
