console.log('hello');

// series block
const seriesItem = document.querySelector('.seriesItem');
const opticalTitle = document.querySelector('.optical');
const sunglassesTitle = document.querySelector('.sunglasses');
const functionalTitle = document.querySelector('.functional');

// 觸發產品頁籤時加上 border
seriesItem.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.textContent === 'OPTICAL') {
    opticalTitle.setAttribute('class', 'borderShow');
    sunglassesTitle.setAttribute('class', 'borderTransparent');
    functionalTitle.setAttribute('class', 'borderTransparent');
  }
  else if (e.target.textContent === 'SUNGLASSES') {
    sunglassesTitle.setAttribute('class', 'borderShow');
    opticalTitle.setAttribute('class', 'borderTransparent');
    functionalTitle.setAttribute('class', 'borderTransparent');
  }
  else {
    functionalTitle.setAttribute('class', 'borderShow');
    opticalTitle.setAttribute('class', 'borderTransparent');
    sunglassesTitle.setAttribute('class', 'borderTransparent');
  }
});