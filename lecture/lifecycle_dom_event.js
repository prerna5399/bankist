/////////////////////////////////////////////
// LIFECYCLE DOM EVENTS
////////////////////////////////////////////

// This event is fired as soon as the html doc is converted to the node tree
// This just load the js and html (doesn't wait for external source and images to get load)
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

// When everything gets loads the last event get fired

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
