console.log('hello');

// header block
const hamburger = document.querySelector('.menu');
const menu = document.querySelector('.navList');

// series block
const seriesItem = document.querySelector('.seriesItem');
const opticalTitle = document.querySelector('.optical');
const sunglassesTitle = document.querySelector('.sunglasses');
const functionalTitle = document.querySelector('.functional');
// 經過 querySelectorAll 選取的變數會被儲存為陣列，使用時注意，不可視為單一元素
const opticalImage = document.querySelectorAll('.opticalImageHeader');
const opticalImageSm = document.querySelectorAll('.opticalImageHeaderSm');
const sunglassesImageSm = document.querySelectorAll('.sunglassesImageHeaderSm');
const celluloid = document.querySelector('.titleCelluloid');
const opticalList = document.querySelector('.opticalProductList');
const sunglassesList = document.querySelector('.sunglassesList');

// stores block
const labelText = document.querySelector('.district > span');
const ulList = document.querySelector('.storeList');
const selectList = document.querySelector('#card');
const storeList = document.querySelector('.storeList');
const singleList = document.querySelector('.singleList');

// 觸發漢堡選單
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('menuOpen');
  })
}

// 觸發產品頁籤
if (seriesItem) { //先加上 if 判斷，是為了避免頁面切換之後找不到原有的元素而跳錯誤
  seriesItem.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.textContent === 'OPTICAL') {
      opticalTitle.setAttribute('class', 'borderShow');
      sunglassesTitle.setAttribute('class', 'borderTransparent');
      functionalTitle.setAttribute('class', 'borderTransparent');
      opticalImage.forEach((i) => {
        i.classList.remove('imgHide');
      });
      opticalImageSm.forEach((i) => {
        i.setAttribute('class', 'opticalImageHeaderSm');
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
        i.classList.add('imgHide');
      });
      opticalImageSm.forEach((i) => {
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

// 配合斷點觸發產品頁籤
if (seriesItem && window.innerWidth === 768) {
  seriesItem.addEventListener('click', (e) => {
    if (e.target.textContent === 'OPTICAL') {
      opticalImageSm.forEach((i) => {
        i.setAttribute('class', 'opticalImageHeaderSm');
      });
      sunglassesImageSm.forEach((i) => {
        i.removeAttribute('style');
      });
    }
    else if (e.target.textContent === 'SUNGLASSES') {
      opticalImageSm.forEach((i) => {
        i.setAttribute('class', 'imgHide');
      });
      sunglassesImageSm.forEach((i) => {
        i.style.display = 'block';
      });
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
      storeList.classList.add('listHide');
      singleList.classList.remove('listHide');
    }
  });
}