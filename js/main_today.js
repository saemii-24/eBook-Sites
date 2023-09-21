

const todayCategory = [
  '지구를 살리는 기발한 생각 10', 
  '던전 인 무림', 
  '어제 뭐 먹었어?', 
  '하나노이 군과 상사병 12', 
  '래리 윌리엄스 좋은 주식은 때가 있다', 
  '사랑하게 될 줄 알았어', 
  '에세이즘', 
  '부자들의 지식 창고에는 뭔가 특별한 것이 있다', 
  '제주 여행 큐레이션', 
  '결심이 필요한 순간들',
  '창작형 인간의 하루',
  '엉뚱소심 유령 탐정단'
];
const putToday = document.querySelector('.today__put');


//로드시 카테고리를 불러온다.
todayCategory.forEach((todayEl)=>{
  todaySearch(todayEl);
});

function todaySearch(searchWord) {
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
          // console.log(filterData);

              //첫번째 요소만 불러온다.
              let i = 0;
              //1,2번 상위요소
              const slide = document.createElement("div");
              slide.setAttribute("class", "swiper-slide js-history-target");

              //1번 묶음
              const thumbnail = document.createElement("a");
              thumbnail.setAttribute("class", "thumbnail");
              thumbnail.setAttribute("href", "./sub.html");

              const img = document.createElement("img");
              img.setAttribute("src", filterData[i].thumbnail);
              img.setAttribute("alt", `이미지`);

              //2번 묶음
              const info = document.createElement("div");
              info.setAttribute("class", "info");

              const title = document.createElement("div");
              title.setAttribute("class", "title");
              title.textContent = filterData[i].title;         

              const titleLink = document.createElement("a");
              titleLink.setAttribute("href", "./sub.html");

              const author = document.createElement("div");
              author.setAttribute("class", "author");
              author.textContent = filterData[i].authors;                   

              //묶음을 정리한다.
              thumbnail.append(img);
              titleLink.append(title);
              info.append(titleLink,author);
              slide.append(thumbnail,info);
              putToday.append(slide);

      });
}



//pick slide//
let today_mySwiper = new Swiper(".today_mySwiper", {
  loop:true,
  slidesPerView: 6,
  spaceBetween: 36,
  slidesPerGroup: 1,
  centeredSlides: false,
  speed: 500,
  navigation: {
      nextEl: ".today-next",
      prevEl: ".today-prev",
    }
});