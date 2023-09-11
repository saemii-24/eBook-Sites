const Allservice = [
    {"주요서비스" : ["종합베스트셀러", "스테디셀러", "신상품", "사은품", "특가", "정가인하", "인물&작품", "선물하기", "추천"]},
    {"웹소설 톡소다" : ["웹소설", "웹툰", "자유연재", "베스트"]},
    {"고객센터" : ["자주묻는질문", "1:1문의", "공지사항", "전화상담 안내도", "법인회원 대량주문"]},
    {"기타" : ["이용약관", "개인정보처리방침", "청소년보호정책"]},
    {"이벤트/혜택" : ["출석체크", "이벤트당첨자", "이벤트"]},
    {"핫트랙스" : ["오늘만특가", "베스트"," 쿠폰/혜택", "COVER WELL (POD)"]},
    {"마이" : ["주문/배송목록", "선물함", "활동내역", "매장 구매 내역","영수증 조회/후 적립", "회원정보", "알림센터", "나의혜택/포인트"]},
    {"ONLY서비스" : ["책 그리고 꽃", "이달의 책", "오늘의 선택", "POD 주문형출판", "스펙비교", "기프트카드", "분철서비스", "바로찾는바로드림", "수준별원서읽기",  "디 에센셜"]},
    {"CASTing" : ["홈", "라이브", "영상", "포스트", "이벤트"]},
    {"라이브러리" : ["리스트", "코멘트", "Klover리뷰", "문장수집"]},
    {"캠페인" : ["Story", "캠페인 소개", "교보손글씨대회", "#일상속손글씨", "손글씨 폰트", "이벤트"]},
    {"북모닝" : ["이달의 북모닝도서"]},
    {"매장안내" : ["문보장"]},
    {"문화공간" : ["강연/공연", "여행/체험", "전시", "이벤트/소식"]},
    {"스토리" : ["포트폴리오", "스토리공모전", "테마공모전" , "스토리마켓"]},
    {"회사소개" : ["교보문고 소개", "사업현황", "사회공헌", "채용정보"]},
    {"eBook/sam" : ["오디오북", "대여", "신간", "교보오리지널", "sam무제한", "sam프리미엄", "sam북모닝", "학술논문"]},
    {"회원혜택" : ["교보북클럽", "등급별 혜택", "신규회원혜택", "Prestige Lounge", "제휴포인트상품권", "참좋은교보문고"]},
    {"협력사여러분" : ["협력사여러분", "제휴/제안", "애드북", "협력사네트워크", "CP관리시스템"]}
]

//menu 버튼 누르면 nav가 보여져야 함
const nav = document.querySelector('header .header-nav');
const menuIcon = document.querySelector('.header-bottom__menu');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
});

//서비스 전체보기
const putNav = document.querySelector('.nav__put');

for(service of Allservice){ //배열에서 객체(카테고리) 하나씩 꺼내기
    const category = document.createElement('li');
    category.setAttribute('class', 'service-category');
    const categoryAnchor = document.createElement('a');
    categoryAnchor.setAttribute('href', 'javascript:void(0)');
    categoryAnchor.textContent = Object.keys(service); //key값은 category li태그
    category.append(categoryAnchor);

    for(serviceSub in service){ //객체에서 배열(세부 카테고리 리스트) 꺼내기
      const ul = document.createElement('ul');
      
      for(sub of service[serviceSub]){ //배열에서 한 개씩(세부 카테고리 1개씩) 꺼내기
        const li =  document.createElement('li')
        const liAnchor = document.createElement('a');
        liAnchor.setAttribute('href', 'javascript:void(0)');
        liAnchor.textContent = sub;
        
        li.append(liAnchor);
        ul.append(li); 
      };
      
      category.append(ul);//sub ul에 li 넣기
  
    }

    putNav.append(category);
  }

  //서비스 전체보기 swiper
  let nav_mySwiper = new Swiper(".nav_mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".nav-scrollbar",
    },
    mousewheel: true,
  });



//tab active
const navTab = document.querySelectorAll('.nav__tab');
const storeCategory = document.querySelector('.store-category');
const serviceAll = document.querySelector('.service-nav-box');

navTab.forEach((tab) => {
    tab.addEventListener('click',(event)=>{
        navTab.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
        if(event.target === navTab[1]){
            storeCategory.style.display = 'none';
            serviceAll.style.display = 'block';
        }else{
            storeCategory.style.display = 'flex';
            serviceAll.style.display = 'none';
        }
    })
})

const storeCategoryList = document.querySelectorAll('.store-category li');
storeCategoryList.forEach((storeCategory)=>{
    storeCategory.addEventListener('click',()=>{
        storeCategoryList.forEach(storeCategory => {storeCategory.classList.remove('active');});
        storeCategory.classList.add('active');
    })
})