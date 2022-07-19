"use strict";

console.log('hello'); // series block

var seriesItem = document.querySelector('.seriesItem');
var opticalTitle = document.querySelector('.optical');
var sunglassesTitle = document.querySelector('.sunglasses');
var functionalTitle = document.querySelector('.functional');
seriesItem.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.textContent === 'OPTICAL') {
    opticalTitle.setAttribute('class', 'border-show');
    sunglassesTitle.removeAttribute('class');
    functionalTitle.removeAttribute('class');
  } else if (e.target.textContent === 'SUNGLASSES') {
    sunglassesTitle.setAttribute('class', 'border-show');
    opticalTitle.removeAttribute('class');
    functionalTitle.removeAttribute('class');
  } else {
    functionalTitle.setAttribute('class', 'border-show');
    opticalTitle.removeAttribute('class');
    sunglassesTitle.removeAttribute('class');
  }
});
//# sourceMappingURL=all.js.map
