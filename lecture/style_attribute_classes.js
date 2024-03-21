///////////////////////////////////////////
// STYLES,ATTRIBUTES AND CLASSES
///////////////////////////////////////////

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'Hello World';
message.innerHTML =
  'We use cookie for improved functionality.<button class="btn btn--close-cookie"> Got It! </button>';

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// They are added as inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// *** To change the value of already exisiting property *** /
// document.documentElement.style.setProperty('--color-primary', 'orangered');

///////////////////////////////////////
// Attributes
/////////////////////////////////////

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful';
// to get a non standard attribute

// console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

// Data Attributes

console.log(logo.dataset.versionNumber);

// classes

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('j');

// This will override every other class also we can't add more classes
// logo.className = 'xyz';
