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
const labelText = document.querySelector('.district > span');
const ulList = document.querySelector('.storeList');
const selectList = document.querySelector('#card');


// 觸發產品頁籤
if (seriesItem) { //先加上 if 判斷，是為了避免頁面切換之後找不到原有的元素而跳錯誤
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
}

// 觸發門市據點的詳細資訊
if (ulList) {
  ulList.addEventListener('click', (e) => {
    if (e.target.className === 'storeDetails') {
      let store = e.target.previousElementSibling.previousElementSibling.textContent
      labelText.textContent = '選擇分店';
      selectList.innerHTML = `<option value="taipei">${store}</option>`;
    }
  });
}