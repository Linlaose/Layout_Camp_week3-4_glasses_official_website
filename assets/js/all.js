"use strict";

console.log('hello'); // series block

var seriesItem = document.querySelector('.seriesItem');
var opticalTitle = document.querySelector('.optical');
var sunglassesTitle = document.querySelector('.sunglasses');
var functionalTitle = document.querySelector('.functional'); // 經過 querySelectorAll 選取的變數會被儲存為陣列，使用時注意，不可視為單一元素

var opticalImage = document.querySelectorAll('.opticalImageHeader');
var celluloid = document.querySelector('.titleCelluloid');
var opticalList = document.querySelector('.opticalProductList');
var sunglassesList = document.querySelector('.sunglassesList'); // 觸發產品頁籤時加上 border

seriesItem.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.textContent === 'OPTICAL') {
    opticalTitle.setAttribute('class', 'borderShow');
    sunglassesTitle.setAttribute('class', 'borderTransparent');
    functionalTitle.setAttribute('class', 'borderTransparent');
    opticalImage.forEach(function (i) {
      i.removeAttribute('class');
    });
    celluloid.textContent = 'Celluloid Combi';
    opticalList.setAttribute('class', 'opticalProductList');
    sunglassesList.setAttribute('class', 'listHide');
  } else if (e.target.textContent === 'SUNGLASSES') {
    sunglassesTitle.setAttribute('class', 'borderShow');
    opticalTitle.setAttribute('class', 'borderTransparent');
    functionalTitle.setAttribute('class', 'borderTransparent');
    opticalImage.forEach(function (i) {
      i.setAttribute('class', 'imgHide');
    });
    celluloid.textContent = '2020 NEW COLLECTION';
    opticalList.setAttribute('class', 'listHide');
    sunglassesList.setAttribute('class', 'sunglassesProductList');
  } else {
    functionalTitle.setAttribute('class', 'borderShow');
    opticalTitle.setAttribute('class', 'borderTransparent');
    sunglassesTitle.setAttribute('class', 'borderTransparent');
  }
});
//# sourceMappingURL=all.js.map
