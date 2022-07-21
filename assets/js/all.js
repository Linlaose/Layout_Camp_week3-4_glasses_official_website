"use strict";

console.log('hello'); // series block

var seriesItem = document.querySelector('.seriesItem');
var opticalTitle = document.querySelector('.optical');
var sunglassesTitle = document.querySelector('.sunglasses');
var functionalTitle = document.querySelector('.functional'); // 經過 querySelectorAll 選取的變數會被儲存為陣列，使用時注意，不可視為單一元素

var opticalImage = document.querySelectorAll('.opticalImageHeader');
var celluloid = document.querySelector('.titleCelluloid');
var opticalList = document.querySelector('.opticalProductList');
var sunglassesList = document.querySelector('.sunglassesList');
var labelText = document.querySelector('.district > span');
var ulList = document.querySelector('.storeList');
var selectList = document.querySelector('#card');
var storeList = document.querySelector('.storeList');
var singleList = document.querySelector('.singleList'); // 觸發產品頁籤

if (seriesItem) {
  //先加上 if 判斷，是為了避免頁面切換之後找不到原有的元素而跳錯誤
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
} // 觸發門市據點的詳細資訊


if (ulList) {
  ulList.addEventListener('click', function (e) {
    if (e.target.className === 'storeDetails') {
      var store = e.target.previousElementSibling.previousElementSibling.textContent;
      labelText.textContent = '選擇分店';
      selectList.innerHTML = "<option value=\"taipei\">".concat(store, "</option>");
      storeList.classList.add('listHide');
      singleList.classList.remove('listHide');
    }
  });
}
//# sourceMappingURL=all.js.map
