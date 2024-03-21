/////////////////////////////////////////////
// EVENT DELEGATION
////////////////////////////////////////////

// Page Navigation

// This will create a copy of the handler for each event
//which is not correct so we will use event delegation instead

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id); // 3 copies will be created
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

/***** EVENT DELEGATION
 * 1.) Add event listener to common parent element
 * 2.) Determin what element originated the event
 **/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // check if the nav__link  class exists
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
