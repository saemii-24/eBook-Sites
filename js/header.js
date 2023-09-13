const searchBtn = document.querySelector('.header-middle__select>button');
const selectedOpt = document.querySelector('.selected-option');
const optionItems = document.querySelectorAll('.optionItem');
const searchEls = document.querySelectorAll('.js-search');
const searchInput = document.querySelector('.header-middle__input>input');


//검색 버튼 옵션 선택하기
searchBtn.addEventListener('click',()=>{
  searchEls.forEach((searchEl)=>{searchEl.classList.toggle('active');});
});

//검색 버튼 옵션 선택하면 자동으로 끄기
optionItems.forEach((optionItem)=>{
  optionItem.addEventListener('click',(event)=>{
    selectedOpt.textContent = event.target.textContent;
    searchEls.forEach((searchEl)=>{searchEl.classList.remove('active');});
  });
})

//placeholder 로드시에 랜덤출력하기
const placeholderData = [
"샘터 동화상 수상 작품집",
"'완전 괴물이 되었네' 박영 스릴러",
"무라카미 하루키 6년 만의 신작 장편!",
"올해 최고의 반전 스릴러",
"지금 하루하루가 마땅치 않는 당신에게",
"왜 엄하게 가르치지 않는가"
]


let placeholderSelect = Math.floor(Math.random() * placeholderData.length);
searchInput.placeholder = placeholderData[placeholderSelect];


//symbol 누르면 banner사라짐
const bannerClose = document.querySelector('.close-symbol');
const topBanner = document.querySelector('.top-banner');

bannerClose.addEventListener('click',()=>{
    topBanner.style.height = '0';
})

//input박스에 한 글자라도 입력하면 x버튼이 등장한다.
const inputClose = document.querySelector('.header-middle__close');
searchInput.addEventListener('keyup',()=>{
  if(searchInput.value !== ''){
    inputClose.classList.add('active');
  }else{
    inputClose.classList.remove('active');
  }
});

inputClose.addEventListener('click',()=>{
  searchInput.value = '';
  searchInput.focus();
  inputClose.classList.remove('active');
});


//scroll이 일정 높이를 지나면 고정된다.
const header = document.querySelector('#header-middle__full-inner');
let headerHeight = document.querySelector('header').offsetHeight;
// console.log(headerHeight);

let scroll = window.scrollY;
window.addEventListener('scroll', ()=>{
  scroll = window.scrollY;
  
  if(scroll>headerHeight){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }

});

//footer
const infoDate = document.querySelectorAll('.info__date');
const today = new Date;
const todayYear = today.getFullYear() ;
const todayMonth = today.getMonth()>= 10 ? today.getMonth()+1 :'0'+ (today.getMonth()+1);
const todayDate = today.getDate()>= 10 ? today.getDate() :'0'+today.getDate();
const todayFormat = `${todayYear}-${todayMonth}-${todayDate}`;

infoDate.forEach( info => info.innerText = todayFormat);

//family_site
const familySite = document.querySelector('.family__site ul');
const familySiteBtn = document.querySelector('.family__site button');

familySiteBtn.addEventListener('click',()=>{
  familySiteBtn.classList.toggle('active');
  familySite.classList.toggle('active');
});

//select notice mark
const noticeMark = document.querySelector('.title-notice');
const noticeMarkInfo = document.querySelector('.title-notice__box');
const noticeClose = document.querySelector('.title-notice__box .close-symbol');
noticeMark.addEventListener('click',()=>{
  noticeMarkInfo.classList.toggle('active');
});
noticeClose.addEventListener('click',()=>{
  noticeMarkInfo.classList.remove('active');
});

//flyMenu
const flyMenuList = [
  '내게 빌어봐 zip',
  '이재은의 말하기 수업',
  'App 로그인 1천캐시',
  '인기 로맨스 1권 무료'
];

const putFly = document.querySelector('.fly__put');

for(i=0; i<flyMenuList.length; i++){
  const a = document.createElement('a');
  a.setAttribute('href', 'javascript:void(0)');
  a.setAttribute('class', 'swiper-slide', 'flyMenu__img');
  
  const img = document.createElement('img');
  img.setAttribute('src', `./images/flyMenu_slide${i+1}.jpg`);
  img.setAttribute('alt', `${flyMenuList[i]}`);
  
  a.append(img);
  putFly.append(a);
}

let flyMenu_mySwiper = new Swiper(".flyMenu_mySwiper", {
  pagination: {
    el: ".fly-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number>=10 ? number : '0'+number;
    },
    formatFractionTotal: function (number) {
      return number>=10 ? number : '0'+number;
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        ' - ' +
        '<span class="' + totalClass + '"></span>';
    }
  },
  navigation: {
    nextEl: ".fly-next",
    prevEl: ".fly-prev",
  },
});

//history & to-top
window.addEventListener('scroll',()=>{
  let scroll = window.scrollY;
  const bottomBtn = document.querySelector('.bottom__button');
  if(scroll>200){
    bottomBtn.classList.add('active');
  }else{
    bottomBtn.classList.remove('active');
  }
});

//morebrand 토글
// const moreIcon = document.querySelector('.benefit .more-symbol');
const benefit = document.querySelector('.benefit');

benefit.addEventListener('click',()=>{
  benefit.classList.toggle('active');
})

//more-box html태그 만들기
const moreBrandList = ["교보문고", "eBook", "sam", "핫트랙스", "매장안내", "톡소다", "스토리", "북모닝", "리딩트리", "퍼플", "창작의날씨", "꾸밍"];
const putmore = document.querySelector('.more__put');

for(let i=0; i<moreBrandList.length; i++){
  const morelist = document.createElement('li');
  const imgAnchor = document.createElement('a');
  imgAnchor.setAttribute('href', 'javascript:void(0');
  const img = document.createElement('img')
  img.setAttribute('src', `./images/brand_${i+1}.png`);
  img.setAttribute('alt', moreBrandList[i]);
  const spanAnchor = document.createElement('a');
  spanAnchor.setAttribute('href', 'javascript:void(0');
  const span = document.createElement('span');  
  span.textContent = moreBrandList[i];

  imgAnchor.append(img);
  spanAnchor.append(span);
  morelist.append(imgAnchor, spanAnchor);
  putmore.append(morelist);
}

//more-box 토글
const moreBoxTrigger = document.querySelector('.header-top__more>a');
const moreBox = document.querySelector('.header-top__more')
moreBoxTrigger.addEventListener('click',()=>{
  moreBox.classList.toggle('active');
})