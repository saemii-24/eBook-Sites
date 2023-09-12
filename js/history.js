//localStorage 이용하기
const bookThumb = document.querySelectorAll(".swiper-slide");
const bookTitle = document.querySelectorAll(".swiper-slide .title");

// let memorybook = JSON.parse(localStorage.getItem("book"));
let memorybook = JSON.parse(localStorage.getItem("book"));

//localStorage에 저장된 memory값이 있다면 실행한다.
if (memorybook.length > 0) {
  memorybook.forEach((memory) => historyBox(memory));
}

bookThumb.forEach((book) => {
  book.addEventListener("click", (event) => {
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
    console.log(memorybook);
  });
});
console.log(memorybook); //localStorage저장된 값확인

//저장된 값을 이용해 ajax를 사용한다.
const historyIcon = document.querySelector(".bottom__button .history");
const historyModal = document.querySelector(".history-modal");
const historyModalClose = document.querySelector(
  ".history-modal .history-close"
);

//modal 열기
historyIcon.addEventListener("click", () => {
  historyModal.classList.add("active");
  //memorybook이 비었는지 확인한다.
  ifEmpty();
  //historyBox를 비운다.
  const putHistory = document.querySelector(".history__put");
  putHistory.textContent = '';
  //modal을 열 때 ajax를 실행한다.
  if(memorybook.length>0){memorybook.forEach(memory =>historyBox(memory))};
  //favorite버튼을 누를 수 있어야 한다.
  favoriteBtnToggle();
  removeBtn();
});

//memoryBook이 비어있으면 비었다는 표시를 해준다.
function ifEmpty() {
  const historyEmptySign = document.querySelector(".history-empty");
  const historyPut = document.querySelector(".history__put");
  if (!memorybook || historyPut.textContent==='' ) {
    //memoryBook이 null이면
    historyEmptySign.style.display = "flex";
  } else {
    historyEmptySign.style.display = "none";
  }
}

//modal 닫기
historyModalClose.addEventListener("click", () => {
  historyModal.classList.remove("active");
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

//x버튼으로 비우기 (hcloseHistoryBtn)

function removeBtn(){
  let closeHistoryBtn = document.querySelectorAll(".book-btn .close");
   closeHistoryBtn.forEach((closeBtn, index)=>{
    closeBtn.addEventListener("click",(event)=>{
      console.log(index);
      let parentBox = (event.target).parentNode.parentNode.parentNode;
      $(parentBox).remove();
      //memorybook 배열도 같은 index번호는 삭제해준다.
      //삭제시 index번호가 달라져 문제가 생김
      //todo 문제 해결할 것//
      memorybook.splice(index,1);
      console.log(memorybook);
      ifEmpty();
    });
   });
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

    console.log(data);

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
