//main-info 혜택 더보기

const moreBtn = document.querySelectorAll('.more-icon');
const moreInfo = document.querySelectorAll('.more-info');
const moreTitle = document.querySelectorAll('.more-title');

moreBtn.forEach((more, index)=>{
    more.addEventListener('click',(event)=>{
        event.currentTarget.classList.toggle('active');
        moreInfo[index].classList.toggle('active');
        moreTitle[index].classList.toggle('active');
    });
})