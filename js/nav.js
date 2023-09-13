const Allservice = [
  { "주요서비스": ["종합베스트셀러", "스테디셀러", "신상품", "사은품", "특가", "정가인하", "인물&작품", "선물하기", "추천"] },
  { "웹소설 톡소다": ["웹소설", "웹툰", "자유연재", "베스트"] },
  { "고객센터": ["자주묻는질문", "1:1문의", "공지사항", "전화상담 안내도", "법인회원 대량주문"] },
  { "기타": ["이용약관", "개인정보처리방침", "청소년보호정책"] },
  { "이벤트/혜택": ["출석체크", "이벤트당첨자", "이벤트"] },
  { "핫트랙스": ["오늘만특가", "베스트", " 쿠폰/혜택", "COVER WELL (POD)"] },
  { "마이": ["주문/배송목록", "선물함", "활동내역", "매장 구매 내역", "영수증 조회/후 적립", "회원정보", "알림센터", "나의혜택/포인트"] },
  { "ONLY서비스": ["책 그리고 꽃", "이달의 책", "오늘의 선택", "POD 주문형출판", "스펙비교", "기프트카드", "분철서비스", "바로찾는바로드림", "수준별원서읽기", "디 에센셜"] },
  { "CASTing": ["홈", "라이브", "영상", "포스트", "이벤트"] },
  { "라이브러리": ["리스트", "코멘트", "Klover리뷰", "문장수집"] },
  { "캠페인": ["Story", "캠페인 소개", "교보손글씨대회", "#일상속손글씨", "손글씨 폰트", "이벤트"] },
  { "북모닝": ["이달의 북모닝도서"] },
  { "매장안내": ["문보장"] },
  { "문화공간": ["강연/공연", "여행/체험", "전시", "이벤트/소식"] },
  { "스토리": ["포트폴리오", "스토리공모전", "테마공모전", "스토리마켓"] },
  { "회사소개": ["교보문고 소개", "사업현황", "사회공헌", "채용정보"] },
  { "eBook/sam": ["오디오북", "대여", "신간", "교보오리지널", "sam무제한", "sam프리미엄", "sam북모닝", "학술논문"] },
  { "회원혜택": ["교보북클럽", "등급별 혜택", "신규회원혜택", "Prestige Lounge", "제휴포인트상품권", "참좋은교보문고"] },
  { "협력사여러분": ["협력사여러분", "제휴/제안", "애드북", "협력사네트워크", "CP관리시스템"] }
]

//menu 버튼 누르면 nav가 보여져야 함
const nav = document.querySelector('header .header-nav');
const menuIcon = document.querySelector('.header-bottom__menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  nav.classList.toggle('active');
});

//서비스 전체보기
const putNav = document.querySelector('.nav__put');
makeCategory(Allservice, 'service-category', putNav);
//html 구조 생성 함수
function makeCategory(categoryList, categoryClass, putTag) {
  for (categoryObj of categoryList) { //배열에서 객체(카테고리) 하나씩 꺼내기
    const category = document.createElement('li');
    category.setAttribute('class', categoryClass);
    const categoryAnchor = document.createElement('a');
    categoryAnchor.setAttribute('href', 'javascript:void(0)');
    categoryAnchor.textContent = Object.keys(categoryObj); //key값은 category li태그
    category.append(categoryAnchor);

    for (categoryArr in categoryObj) { //객체에서 배열(세부 카테고리 리스트) 꺼내기
      const ul = document.createElement('ul');

      for (categoryOne of categoryObj[categoryArr]) { //배열에서 한 개씩(세부 카테고리 1개씩) 꺼내기
        const li = document.createElement('li')
        const liAnchor = document.createElement('a');
        liAnchor.setAttribute('href', 'javascript:void(0)');
        liAnchor.textContent = categoryOne;

        li.append(liAnchor);
        ul.append(li);
      };

      category.append(ul);//sub ul에 li 넣기

    }

    putTag.append(category);
  }
}

//tab active
const navTab = document.querySelectorAll('.nav__tab');
const storeCategory = document.querySelector('.store-category');
const serviceAll = document.querySelector('.service-nav-box');

navTab.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    navTab.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    if (event.target === navTab[1]) {
      storeCategory.style.display = 'none';
      serviceAll.style.display = 'block';
    } else {
      storeCategory.style.display = 'flex';
      serviceAll.style.display = 'none';
    }
  })
})

const storeCategoryList = document.querySelectorAll('.store-category li');
storeCategoryList.forEach((storeCategory) => {
  storeCategory.addEventListener('click', () => {
    storeCategoryList.forEach(storeCategory => { storeCategory.classList.remove('active'); });
    storeCategory.classList.add('active');
  })
})

//ebook-nav__put//
const ebookCategory = [
  { "일반": ["경제경영", "자기계발", "시/에세이", "인문", "종교", "소설", "국어/외국어", "정치/사회", "역사/문화", "과학/공학", "IT/프로그래밍", "건강/의학", "가정/생활/요리", "여행/취미", "예술/대중문화", "유아", "아동", "청소년", "교재/수험서", "외국도서"] },
  { "판타지": ["현대판타지", "퓨전판타지", "정통판타지", "게임/레이드", "전쟁/대체역사", "스포츠", "정통무협", "신무협"] },
  { "라이트노벨": ["해외라이트노벨", "국내라이트노벨"], },
  { "로맨스": ["현대로맨스", "동서양시대물", "TL/라이트노벨", "할리퀸"] },
  { "BL": ["현대BL", "판타지BL", "시대물BL", "해외BL"] },
  { "로맨스판타지": ["동양판타지", "서양판타지"] },
  { "웹툰": ["로맨스판타지", "로맨스", "드라마", "판타지", "액션/무협", "BL", "GL", "섹슈얼로맨스"] },
  { "만화": ["드라마", "순정만화", "할리퀸", "BL만화", "학원물", "스포츠", "액션/무협", "SF/판타지", "명랑/코믹", "탐정/추리", "공포/스릴러", "요리", "아동", "교양/역사", "그래픽노블", "섹슈얼로맨스"] },
  { "스페셜코너": ["선물하기", "교보e캐시", "eBook집중탐구", "헤택 라운지", "이벤트 캘린더", "신간 캘린더", "교보 오리지널", "신간", "RTS"] }
];

const audioCategory= [
  {"일반" : ["인문", "종교", "국어/외국어", "정치/사회", "역사/문화", "과학/공학", "건강/의학", "가정/생활/요리", "여행/취미", "예술/대중문화", "유아", "아동", "청소년", "로맨스"]},
  {"경제/경영" : ["경제일반", "재테크/금융", "경영일반", "마케팅/세일즈", "창업", "기타"]},
  {"시/에세이" : ["시", "에세이"]},
  {"소설" : ["소설"]},
  {"자기계발" : ["인간관계", "성공/처세", "자기능력계발"]},
  {"스페셜코너" : ["선물하기", "교보e캐시", "eBook 집중탐구", "혜택 라운지", "이벤트 캘린더", "신간 캘린더", "교보 오리지널", "신간", "RTS"]},
  ]
  
  const videoCategory = [
  {"학습/자기계발" : ["직무교육", "어학", "자격증", "초중고", "기타"]},
  {"재테크" : ["기타", "부동산", "주식"]},
  {"스페셜코너" : ["선물하기", "교보e캐시", "eBook 집중탐구", "혜택 라운지", "이벤트 캘린더", "신간 캘린더", "교보 오리지널", "신간", "RTS"]},
  ]

const putEbookNav = document.querySelector('.ebook-nav__put');
const putAudioNav = document.querySelector('.audio-nav__put');
const putVideoNav = document.querySelector('.video-nav__put');
makeCategory(ebookCategory, 'ebook-category', putEbookNav);
makeCategory(audioCategory, 'audio-category', putAudioNav);
makeCategory(videoCategory, 'video-category', putVideoNav);


const ebookShortcut = ["전자도서관", "sam무제한", "교보e캐시", "대여eBook", "학술논문", "북드림", "교보eBook앱 첫 로그인시 1000캐시 증정"];
const putEbookShortcut = document.querySelector('.ebook-shortcut');

for(let i =0; i<ebookShortcut.length; i++){
  const shortcutImg = document.createElement('img');
  shortcutImg.setAttribute('src',`./images/ebook_icon_${i+1}.png`);
  shortcutImg.setAttribute('alt', ebookShortcut[i]);

  const shortcutAnchor = document.createElement('a');
  shortcutAnchor.setAttribute('href', 'javascript:void(0)');
  shortcutAnchor.setAttribute('class', 'shortcut__icon');

  const shortcutTitle = document.createElement('div');
  shortcutTitle.setAttribute('class','shortcut__title');
  shortcutTitle.setAttribute('class',`shortcut__title-${i+1}`);
  shortcutTitle.textContent = ebookShortcut[i];

  shortcutAnchor.append(shortcutImg, shortcutTitle);
  putEbookShortcut.append(shortcutAnchor);
}
//마지막 shortcut은 title을 제외한다.
const ebookLastTitle = document.querySelector(`.ebook-shortcut .shortcut__title-${ebookShortcut.length}`);
ebookLastTitle.remove();

//ebook-tab//
//navTab 선택에 따라 보여지는 nav가 다르다.
const ebookTab = document.querySelectorAll('.ebook-tab span');
const ebookNav = document.querySelectorAll('.ebook-nav-category');
console.log(ebookNav);

ebookTab.forEach((tab,index)=>{
  tab.addEventListener('click',()=>{
    ebookTab.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    ebookNav.forEach(nav => nav.classList.remove('active'));
    ebookNav[index].classList.add('active');
  })
})  