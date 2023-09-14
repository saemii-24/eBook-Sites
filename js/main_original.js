const originalList = [
  '이상한 그림',
  '완전한 인간',
  '호모 알레스 날개 인간',
  '적막한 폭발',
  '소심한 사람들만 남았다',
  '서울 카타콤',
  '벌거벗은 세계사: 전쟁편',
  '삼국평화고등학교 테러 사건',
  '푸른 살',
  '순정복서',
  '디 아이돌',
  '연옥의 수리공',
  '아무네 가게',
  '낭패',
  '증발 도깨비불',
  "들개들의 밤", 
  "저승 가는 길에는 목욕탕이 있다", 
  "가해자만 없는 회사", 
  "교육혁명 2030"
];

const putOriginal = document.querySelector('.original__put');


//로드시 카테고리를 불러온다.
originalList.forEach((originalEl)=>{
  originalSearch(originalEl);
});

function originalSearch(searchWord) {
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
              info.append(titleLink,author);
              slide.append(thumbnail,info);
              putOriginal.append(slide);

      });
}



//pick slide//
let original_mySwiper = new Swiper(".original_mySwiper", {
  slidesPerView: 7,
  spaceBetween: 35,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 10,
  navigation: {
    nextEl: ".original-next",
    prevEl: ".original-prev",
  },
});