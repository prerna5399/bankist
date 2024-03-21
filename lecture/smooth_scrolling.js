const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);
  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', window.scrollX, window.scrollY);

  //   window.scrollTo(s1coord.left + window.scrollX, s1coord.top + window.scrollY);

  //   window.scrollTo({
  //     left: s1coord.left + window.scrollX,
  //     top: s1coord.top + window.scrollY,
  //     behavior: 'smooth',
  //   });

  section1.scrollIntoView({ behavior: 'smooth' });
});
