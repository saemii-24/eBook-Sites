const bestCategory = [
//일반
['이지 라이팅',
'김재우의 영어회화',
'귀가 트이는 영어',
'법련 9월호',
'진짜 미국 영어(EBS 방송교재)',
'디지털시대의 글쓰기',
'집착의 법칙',
'에듀윌 온라인',
'역행자',
'원씽',
'도둑맞은 집중력',
'자본주의',
'불편한 편의점',
'바다가 들리는 편의점',
'도시와 그 불확실한 벽',
],

//로맨스
['시한부 공작 부인은 버려 주세요',
'후문의 비',
'금당귀연',
'장상사',
'적녀의 비',
'저승사자의 하룻밤 신부',
'재성원령기',
'서서득정',
'카르젠의 야수',
'예라흐',
'이번 생은 가주가 되겠습니다',
'봉회소',
'나의 아가씨',
'독보경화',
'제일후',
],

//BL
[
'용이 비를 내리는 나라 1부 1',
'영원한 계약',
'남의 BL만화',
'천관사복 1',
'동생이 영웅이라 꿀 빱니다',
'마도조사 1',
'스윙 배이비',
'최강의 냄새',
'배타적 연애금지구역',
'메리 마블링',
'멜로 드라마의 문법',
'황제의 토파즈',
'복숭아나무 아래에서',
'메리지 메이트',
'주인공의 마검이 되었습니다',
],

//판타지
['진화 특성으로 최강 네크로맨서',
'무한전생-더빌런',
'두 번 사는 랭커',
'농사하려고 퇴사합니다',
'0레벨 플레이어',
'죽지 않는 엑스트라',
'부서진 성좌의 회귀',
'얼어붙은 플레이어의 귀환',
'코드네임 하백',
'짐승조선',
'미친 재능의 전직 빌런',
'무직전생',
'제국의 시작: 특수 요원, 망나니 공자가 되다',
'책벌레의 하극상 제5부 여신의 화신',
'주무르면 다 고침',
],

//무협
['철혈의 선',
'천마성의 막내아들',
'십파일방',
'천부천하',
'검신광룡',
'도군',
'퀘스트 in 무림',
'단목세가의 역대급 망나니',
'남궁세가 소공자',
'칠대천마',
'무사정천',
'요괴본색',
'무극연의, 무백',
'흑월의 주인',
'하필이면 미친개에 빙의되었네',
],

//만화
['원피스',
'용이 비를 내리는 나라 1부 2',
'주술회전',
'열혈강호',
'남의 BL만화',
'천관사복 2',
'브링 더 러브',
'명탐정 코난',
'스파이 패밀리',
'마도조사 1',
'최애의 아이',
'지박소년 하나코군',
'가비지 타임 1',
'나루토 72',
'헌터x헌터',
],

//오디오 북
['영어책 한 권 외워봤니?',
'인문 고사성어',
'고린도전서 강해',
'부자 아빠 가난한 아빠',
'이상한 과자 가게 전천당',
'지적 대화를 위한 넓고 얕은 지식 제로',
'너의 췌장을 먹고 싶어',
'12가지 인생의 법칙',
'투자에 대한 생각',
'여기가 끝이 아니다',
'데일 카네기 인간관계 론',
'깨어라 이스라엘',
'사람 잡아먹는 자판기 테마 소설집',
'매우 예민한 사람들을 위한 상담소',
'사는 게 고통일 때, 쇼펜하우어',
]
];


  function bestSearch(searchWord, wrapperIndex, bookIndex) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: searchWord, size: 1 },
        headers: { Authorization: "KakaoAK 381ddfe6fc1daf3a1b6115b0d0c98c8c" },
        async:false,
      })
        .done(function (originData) {
  
            const data = originData.documents;
            const filterData = data.filter(function(data){
                //썸네일이 없는 경우 제외한다.
                return data.thumbnail!=''; 
            });
  
                //첫번째 요소만 불러온다.
                let i = 0;

                //1,2번 상위요소
                const slide = document.createElement("div");
                slide.setAttribute("class", "swiper-slide");
  
                //1번 묶음
                const thumbnail = document.createElement("a");
                thumbnail.setAttribute("class", "thumbnail");
                thumbnail.setAttribute("href", "javascript:void(0)");
  
                const img = document.createElement("img");
                img.setAttribute("src", filterData[i].thumbnail);
                img.setAttribute("alt", `${filterData[i].title} 표지`);
  
                //2번 묶음
                const info = document.createElement("div");
                info.setAttribute("class", "info");

                const num = document.createElement("div");
                num.setAttribute("class", "num");
                num.textContent = bookIndex+1;  
  
                const title = document.createElement("div");
                title.setAttribute("class", "title");
                title.textContent = filterData[i].title;         
  
                const titleLink = document.createElement("a");
                titleLink.setAttribute("href", "javascript:void(0)");
  
                const author = document.createElement("div");
                author.setAttribute("class", "author");
                author.textContent = filterData[i].authors;                   
  
                //묶음을 정리한다.
                thumbnail.append(img);
                titleLink.append(title);
                info.append(num, titleLink,author);
                slide.append(thumbnail,info);
                bestWrapper[wrapperIndex].append(slide);
        });
  }
  
const bestInner = document.querySelectorAll('.best__inner-swiper');
const bestWrapper = document.querySelectorAll('.best .swiper-wrapper');
// console.log(bestWrapper);

const tabCategory = document.querySelectorAll('.tab p');
// console.log(tabCategory); 


/*불러온 bestWrapper에 각 인덱스에 맞는 정보가 불러와진다.*/
bestWrapper.forEach((wrapper, wrapperIndex)=>{
    bestCategory[wrapperIndex].forEach((best, bookIndex)=>{
        bestSearch(best, wrapperIndex, bookIndex);
    });
});
/*bestWrapper는 tab인덱스와 동일한 것만 display:block이 되며,
나머지는 display:none 된다.*/
tabCategory.forEach((tab, tabIndex)=>{
    tab.addEventListener('click',()=>{
        bestInner.forEach(inner=>inner.classList.remove('active'));
        bestInner[tabIndex].classList.add('active');
        tabCategory.forEach(tab=>tab.classList.remove('active'));
        tab.classList.add('active');
    })
});
  
/*num 이 1인 경우엔 background color를 변경하기 위해 
class를 추가한다.*/
const nums = document.querySelectorAll('.num');
nums.forEach((num)=>{
    if(num.innerText === '1'){
        num.classList.add('first');
    }
});

  //pick slide//
  let best_mySwiper = new Swiper(".best_mySwiper", {
    slidesPerView: 7,
    spaceBetween: 35,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: ".best-next",
      prevEl: ".best-prev",
    },
  });

  