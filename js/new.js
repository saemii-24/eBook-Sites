const newList = [
  "미국 로또로 역대급 재벌!",
  "킹덤 67",
  "선택한다는 착각",
  "작가와 연인들",
  "숲스러운 사이",
  "보통의 집구석",
  "신비 섬 제주 유산",
];
const putnew = document.querySelector(".new__put");
const bookInfo = []; //ajax에서 정보를 기억해 둘 배열

//로드시 카테고리를 불러온다.
newList.forEach((newEl) => {
  newSearch(newEl);
});

function newSearch(searchWord) {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: searchWord, size: 1 },
    headers: { Authorization: "KakaoAK 381ddfe6fc1daf3a1b6115b0d0c98c8c" },
    async: false,
  }).done(function (originData) {
    const data = originData.documents;
    const filterData = data.filter(function (data) {
      //썸네일이 없는 경우 제외한다.
      return data.thumbnail != "";
    });
    console.log(filterData);

    //첫번째 요소만 불러온다.
    let i = 0;

    //1,2번 상위요소
    const newBox = document.createElement("div");
    newBox.setAttribute("class", "new__box");

    //1번 묶음
    const thumbnail = document.createElement("a");
    thumbnail.setAttribute("class", "thumbnail");
    thumbnail.setAttribute("href", "javascript:void(0)");

    const img = document.createElement("img");
    img.setAttribute("src", filterData[i].thumbnail);
    img.setAttribute("alt", `${filterData[i].thumbnail} 표지`);

    //2번 묶음
    const title = document.createElement("a");
    title.setAttribute("class", "title");
    title.setAttribute("href", "javascript:void(0)");
    title.textContent = filterData[i].title;

    //묶음을 정리한다.
    thumbnail.append(img);
    newBox.append(thumbnail, title);
    putnew.append(newBox);

    let bookInfoObject = {
      thumbnail: filterData[i].thumbnail,
      title: filterData[i].title,
      author: filterData[i].authors,
    };

    bookInfo.push(bookInfoObject);
  });
}

//new__info__zoom에 들어갈 정보를 불러온다.
const newBoxes = document.querySelectorAll(".new__box"); //안의 정보들은 인덱스 번호를 이용한다.
let zoomThumbnail = document.querySelector(".info__thumbnail");
let zoomTitle = document.querySelector(".info__title");
let zoomAuthor = document.querySelector(".info__author");

//실행되자마자 넣을 정보
zoomInfo(0);

//현재 정보는 bookInfo에 들어있음
newBoxes.forEach((newBox, index) => {
  newBox.addEventListener("click", (event) => {
    zoomInfo(index);
  });
});

function zoomInfo(index){
    zoomThumbnail.textContent = '';
    let zoomImg = document.createElement("img");
    zoomImg.setAttribute("src", bookInfo[index].thumbnail);
    zoomImg.setAttribute("alt", `${bookInfo[index].thumbnail} 표지`);
    zoomThumbnail.append(zoomImg);

    zoomTitle.innerText = bookInfo[index].title;
    zoomAuthor.innerText = bookInfo[index].author;
}

//pick slide//
let new_mySwiper = new Swiper(".new_mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});
