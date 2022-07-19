console.log('hello');

// series block
const seriesItem = document.querySelector('.seriesItem');
const opticalTitle = document.querySelector('.optical');
const sunglassesTitle = document.querySelector('.sunglasses');
const functionalTitle = document.querySelector('.functional');

seriesItem.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.textContent === 'OPTICAL') {
    opticalTitle.setAttribute('class', 'border-show');
    sunglassesTitle.removeAttribute('class');
    functionalTitle.removeAttribute('class');
  }
  else if (e.target.textContent === 'SUNGLASSES') {
    sunglassesTitle.setAttribute('class', 'border-show');
    opticalTitle.removeAttribute('class');
    functionalTitle.removeAttribute('class');
  }
  else {
    functionalTitle.setAttribute('class', 'border-show');
    opticalTitle.removeAttribute('class');
    sunglassesTitle.removeAttribute('class');
  }
});