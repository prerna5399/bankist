// Sticky Bar
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// Sticky Nav : Intersection Observer API

const obsCallback = function (entries, observer) {
  entries.forEach(e => console.log(e));
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2], //0.1,
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
