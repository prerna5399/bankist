/* <div class="slide"><img src="img/img-1.jpg" alt="Photo 1" /></div>
<div class="slide"><img src="img/img-2.jpg" alt="Photo 2" /></div>
<div class="slide"><img src="img/img-3.jpg" alt="Photo 3" /></div>
<div class="slide"><img src="img/img-4.jpg" alt="Photo 4" /></div>
<button class="slider__btn slider__btn--left">&larr;</button>
<button class="slider__btn slider__btn--right">&rarr;</button> */

// Implementing Slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let curSlide = 0;
const maxSlide = slides.length;
const slider = document.querySelector('.slider');
// slider.style.overflow = 'visible';

// slides.forEach((s, i) => (s.style.tranform = `translateX(${100 * i}%)`));

const goToSlide = slide => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

// Next Slide

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

// prev Slide

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

// btnRight.addEventListener('click', nextSlide);
btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);
