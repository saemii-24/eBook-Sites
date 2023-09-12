const historyIcon = document.querySelector('.bottom__button .history');
const historyModal = document.querySelector('.history-modal');
const historyModalClose = document.querySelector('.history-modal .history-close');

//modal 열기
historyIcon.addEventListener('click',()=>{
    historyModal.classList.add('active');
});

//modal 닫기
historyModalClose.addEventListener('click',()=>{
    historyModal.classList.remove('active');
});

//localStorage 이용하기
const bookThumb = document.querySelectorAll('.swiper-slide');
// console.log(bookThumb);
const bookTitle = document.querySelectorAll('.title');
const bookArr = [];

bookThumb.forEach((book)=>{
  book.addEventListener('click',(event)=>{
    // event.stopPropagation();
    console.log(event.currentTarget);
    if(event.target.hasChildNodes(bookTitle)){
      if (!bookArr.includes(bookTitle.innerText) && bookArr.length <5) {
        bookArr.push(bookTitle.innerText);
        console.log(bookArr);
      }
      
      localStorage.setItem("book", JSON.stringify(bookArr));
      
    }
  });
})
  const memorybook = JSON.parse(localStorage.getItem("book"));
  console.log(memorybook);

  const historyEmptySign = document.querySelector('.history-empty');
  if(!memorybook){
    historyEmptySign.style.display = 'flex';
  }else{
    historyEmptySign.style.display = 'none';
  }