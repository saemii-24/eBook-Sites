//localStorage 이용하기
// const bookThumb = document.querySelectorAll(".swiper-slide");
// const bookTitle = document.querySelectorAll(".swiper-slide .title");
const bookThumb = document.querySelectorAll(".js-history-target");
const bookTitle = document.querySelectorAll(".js-history-target .title");
const historyBtn = document.querySelector('.bottom__button .history');

let memorybook = JSON.parse(localStorage.getItem("book"));
if (memorybook === null) {
  memorybook = [];
}

//localStorage에 저장된 memory값이 있다면 실행한다.
if (memorybook !== null && memorybook.length > 0) {
  memorybook.forEach((memory) => historyBox(memory));
}

//memorybook에 title값을 저장한다.
bookThumb.forEach((book) => {
  book.addEventListener("click", (event) => {
    if (event.currentTarget.querySelector(".title") !== null) {
      let bookTitle = event.currentTarget.querySelector(".title").innerText;

      //최근 누른 5개가 중복값 없이 저장된다.
      if (!memorybook.includes(bookTitle)) {
        if (memorybook.length >= 5) {
          memorybook.shift();
          memorybook.push(bookTitle);
        } else {
          memorybook.push(bookTitle);
        }
      }
      //배열 localStorage에 저장
      localStorage.setItem("book", JSON.stringify(memorybook));
      //localStorage에 저장된 값 불러오기
      memorybook = JSON.parse(localStorage.getItem("book"));
      historyCount();

      //historyBtn의 배경 첫번째 선택이미지로 교체하기
      const historyBookFirst = event.currentTarget.querySelector('.thumbnail img');

      if (memorybook.length > 0 && memorybook !== null) {
        historyBtn.style.backgroundImage = `url(${historyBookFirst.src})`;
        historyBtn.style.border = "1px solid #000000";
      } else {
        historyBtn.style.backgroundImage = "url('./images/history.png')";
        historyBtn.style.border = "none";
      }
    }
  }
  )
});
//localStorage저장된 값확인
// console.log(memorybook); 

//저장된 값을 이용해 ajax를 사용한다.
const historyIcon = document.querySelector(".bottom__button .history");
const historyModal = document.querySelector(".history-modal");
const historyModalClose = document.querySelector(".history-modal .history-close");

//modal 열기
historyIcon.addEventListener("click", () => {
  historyModal.classList.add("active");
  //memorybook이 비었는지 확인한다.
  ifEmpty();
  //historyBox를 비운다.
  const putHistory = document.querySelector(".history__put");
  putHistory.textContent = '';
  //modal을 열 때 ajax를 실행한다.
  if (memorybook !== null && memorybook.length > 0) {
    memorybook.forEach(memory => historyBox(memory))
  };
  //favorite버튼을 누를 수 있어야 한다.
  favoriteBtnToggle();
  removeBtn();
  allRemoveBtn();
  //memorybook이 비었는지 확인한다.
  ifEmpty();
  historyCount();
  //scroll막기
  document.body.style.overflow = "hidden";
});

//memoryBook이 비어있으면 비었다는 표시를 해준다.
//기본적으로 실행되고 있어야 한다.
ifEmpty();
function ifEmpty() {
  const historyEmptySign = document.querySelector(".history-empty");
  const historyPut = document.querySelector(".history__put");
  if (historyPut.textContent === '') {
    //memoryBook이 null이면
    historyEmptySign.style.display = "flex";
  } else {
    historyEmptySign.style.display = "none";
  }
}

//modal 닫기
historyModalClose.addEventListener("click", () => {
  historyModal.classList.remove("active");
  //스크롤 생성
  document.body.style.overflow = "unset";
});

//history 좋아요 버튼 함수 (history 모달 열린 후 실행)
function favoriteBtnToggle() {
  let favoriteBtn = document.querySelectorAll(".book-btn .favorite");
  favoriteBtn.forEach((favorite) => {
    favorite.addEventListener("click", (event) => {
      event.target.classList.toggle("active");
    });
  });
}

//x버튼으로 하나씩 삭제하기
function removeBtn() {
  let closeHistoryBtn = document.querySelectorAll(".book-btn .close");
  closeHistoryBtn.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", (event) => {
      console.log(index);
      let parentBox = (event.target).parentNode.parentNode.parentNode;
      parentBox.remove();

      let tilteOfparentBox = parentBox.querySelector('.title').innerText;
      console.log(tilteOfparentBox);

      memorybook = memorybook.filter((memorybook) => memorybook !== tilteOfparentBox);
      //localStorage도 업데이트(하나씩 삭제) 하기
      localStorage.setItem("book", JSON.stringify(memorybook));
      console.log(memorybook);
      ifEmpty();
      historyCount();

      //historyBtn Background 변경하기
      changeBtnBg();
    });
  });
}

//전체삭제버튼
function allRemoveBtn() {
  const closeAllBtn = document.querySelector('.history-trash');
  const putHistory = document.querySelector('.history__put');
  closeAllBtn.addEventListener('click', () => {
    memorybook = [];
    putHistory.textContent = '';
    //localStorage도 업데이트(비우기) 하기
    localStorage.setItem("book", JSON.stringify(memorybook));
    ifEmpty();
    historyCount();
    //historyBtn 배경화면 되돌리기
    historyBtn.style.backgroundImage = "url('./images/history.png')";
    historyBtn.style.border = "none";
  });
}

//history count를 표시한다.
historyCount();
function historyCount() {
  //모달 창 안의 count
  const countInModal = document.querySelector('.history-count .count');
  //history버튼 안의 count
  const countInBtn = document.querySelector('.history-btn-count');

  if (memorybook.length > 0 && memorybook !== null) {
    countInBtn.style.display = 'block';
    countInModal.innerText = memorybook.length;
    countInBtn.innerText = memorybook.length;
  } else {
    countInBtn.style.display = 'none';
    countInModal.innerText = 0;
    countInBtn.innerText = 0;
  }
}

//history Btn 배경화면 바꾸기
changeBtnBg();
function changeBtnBg(){
  if(memorybook.length===0){
    historyBtn.style.backgroundImage = "url('./images/history.png')";
    historyBtn.style.border = "none";
  }else{
    const btnBg = document.querySelector('.history-book:last-child img').src;
    historyBtn.style.backgroundImage = `url(${btnBg})`;
    historyBtn.style.border = "1px solid #000000";
  }
}

//ajax로 태그를 만들어 html에 넣는다.
function historyBox(searchWord) {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: searchWord, size: 1 },
    headers: { Authorization: "KakaoAK 381ddfe6fc1daf3a1b6115b0d0c98c8c" },
    async: false,
  }).done(function (originData) {
    const data = originData.documents;
    //모두 썸네일이 있는 것을 확인했으므로 filter를 제외한다.

    const putHistory = document.querySelector(".history__put");


    //thumbnail만들기
    const thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", data[0].thumbnail);
    thumbnail.setAttribute("alt", `${data[0].title} 표지`);

    const thumbnailAnchor = document.createElement("a");
    thumbnailAnchor.setAttribute("class", "thumbnail");

    thumbnailAnchor.append(thumbnail);

    //bookInfo만들기
    //(1)book-btn 만들기
    const favoriteBtn = document.createElement("button");
    favoriteBtn.setAttribute("class", "favorite");

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "close");

    const bookBtn = document.createElement("div");
    bookBtn.setAttribute("class", "book-btn");

    bookBtn.append(favoriteBtn, closeBtn);

    //(2)title 만들기
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = data[0].title;

    //(3) price-align 만들기
    const price = document.createElement("span");
    price.textContent = data[0].price.toLocaleString();
    price.setAttribute("class", "price");
    const priceWon = document.createElement("span");
    priceWon.textContent = "원";
    const priceAlign = document.createElement("div");
    priceAlign.setAttribute("class", "price-align");

    priceAlign.append(price, priceWon);

    //bookInfo에 넣기
    const bookInfo = document.createElement("div");
    bookInfo.setAttribute("class", "book-info");
    bookInfo.append(bookBtn, title, priceAlign);

    //history-book에 넣기
    const bookHistory = document.createElement("div");
    bookHistory.setAttribute("class", "history-book");
    bookHistory.append(thumbnailAnchor, bookInfo);

    //최종 html에 넣기
    putHistory.append(bookHistory);
  });
}
