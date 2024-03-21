///////////////////////////////////////////
// SELECTING,CREATING AND DELETING ELEMENTS
///////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// return the first element found with the class header
const header = document.querySelector('.header');

const allSection = document.querySelectorAll('.section');
console.log(allSection);

console.log(document.getElementById('section--1'));

// Return a html collection
console.log(document.getElementsByTagName('button'));

console.log(document.getElementsByClassName('btn'));

///////////////////////////////////////////////////////////////////////////
// ********************** Creating And Inserting ELements ************** //
////////////////////////////////////////////////////////////////////////////

// .insertAdjacentElemet

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'Hello World';
message.innerHTML =
  'We use cookie for improved functionality.<button class="btn btn--close-cookie"> Got It! </button>';

// insert the above into dom (can get only added at one place)

// ********* it adds as the first child into the selected element *********

// header.prepend(message);

// ******** it adds as the last child into the selected element ***********
header.append(message);

// ******** to add the element to both the places we will clone it ********

// header.append(message.cloneNode(true));

// ******** to add the element before the selected element ********

// header.before(message);

// ******** to add the element after the selected element ********

// header.after(message);

///////////////////////////////////////////////////////////////////////////
// ********************** Deleting the ELements ************** //
////////////////////////////////////////////////////////////////////////////

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
