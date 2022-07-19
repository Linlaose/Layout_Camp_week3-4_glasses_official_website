console.log('hello');

// series block
const seriesItem = document.querySelector('.seriesItem');
const opticalTitle = document.querySelector('.optical');
const sunglassesTitle = document.querySelector('.sunglasses');
const functionalTitle = document.querySelector('.functional');
// 經過 querySelectorAll 選取的變數會被儲存為陣列，使用時注意，不可視為單一元素
const opticalImage = document.querySelectorAll('.opticalImageHeader');
const celluloid = document.querySelector('.titleCelluloid');
const opticalList = document.querySelector('.opticalProductList');
const sunglassesList = document.querySelector('.sunglassesList');


// 觸發產品頁籤時加上 border
seriesItem.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.textContent === 'OPTICAL') {
    opticalTitle.setAttribute('class', 'borderShow');
    sunglassesTitle.setAttribute('class', 'borderTransparent');
    functionalTitle.setAttribute('class', 'borderTransparent');
    opticalImage.forEach((i) => {
      i.removeAttribute('class');
    });
    celluloid.textContent = 'Celluloid Combi';
    opticalList.setAttribute('class', 'opticalProductList');
    sunglassesList.setAttribute('class', 'listHide');
  }
  else if (e.target.textContent === 'SUNGLASSES') {
    sunglassesTitle.setAttribute('class', 'borderShow');
    opticalTitle.setAttribute('class', 'borderTransparent');
    functionalTitle.setAttribute('class', 'borderTransparent');
    opticalImage.forEach((i) => {
      i.setAttribute('class', 'imgHide');
    });
    celluloid.textContent = '2020 NEW COLLECTION';
    opticalList.setAttribute('class', 'listHide');
    sunglassesList.setAttribute('class', 'sunglassesProductList');
  }
  else {
    functionalTitle.setAttribute('class', 'borderShow');
    opticalTitle.setAttribute('class', 'borderTransparent');
    sunglassesTitle.setAttribute('class', 'borderTransparent');
  }
});