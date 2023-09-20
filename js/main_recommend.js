const recommendCategory = [
  '눈먼 자는 볼 수 없다', 
  '겁쟁이 페달 80', 
  '여름을 한 입 베어 물었더니', 
  '와다 하루키의 한국전쟁 전사', 
  '명탐정의 제물', 
  '사라진 개발자들', 
  '원룸',
  '천 원을 경영하라',
  '100세 철학자의 행복론 2',
  '세상 끝의 카페',
  '그림형제 동화전집(완역본)',
  '완전 배출'
];
const putRecommend = document.querySelector('.recommend__put');


//로드시 카테고리를 불러온다.
recommendCategory.forEach((recommendEl)=>{
  recommendSearch(recommendEl);
});

function recommendSearch(searchWord) {
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: searchWord, size: 1 },
      headers: { Authorization: "KakaoAK 381ddfe6fc1daf3a1b6115b0d0c98c8c" },
      async: false
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
              slide.setAttribute("class", "swiper-slide js-history-target");

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
              putRecommend.append(slide);

      });
}



//pick slide//
let recommend_mySwiper = new Swiper(".recommend_mySwiper", {
  loop:true,
  slidesPerView: 5,
  spaceBetween: 36,
  slidesPerGroup: 1,
  centeredSlides: false,
  speed: 500,
  navigation: {
      nextEl: ".recommend-next",
      prevEl: ".recommend-prev",
    }
});