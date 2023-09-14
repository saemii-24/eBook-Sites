const clickCategory = [
    '도둑맞은 집중력', 
    '김재우의 영어회화', 
    '역행자', 
    '아메리칸 프로메테우스', 
    '스카치가 있어 즐거운 세상', 
    '돈의 속성', 
    '작은 땅의 야수들', 
    '메리골드 마음 세탁소', 
    '세상 끝의 카페', 
    '집착의 법칙'
];
const putClick = document.querySelector('.click__put');


//로드시 카테고리를 불러온다.
clickCategory.forEach((clickEl)=>{
    clickSearch(clickEl);
});

function clickSearch(searchWord) {
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
                slide.setAttribute("class", "swiper-slide");

                //1번 묶음
                const thumbnail = document.createElement("a");
                thumbnail.setAttribute("class", "thumbnail");
                thumbnail.setAttribute("href", "javascript:void(0)");

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
                titleLink.setAttribute("href", "javascript:void(0)");

                const author = document.createElement("div");
                author.setAttribute("class", "author");
                author.textContent = filterData[i].authors;                   

                //묶음을 정리한다.
                thumbnail.append(img);
                titleLink.append(title);
                info.append(titleLink,author);
                slide.append(thumbnail,info);
                putClick.append(slide);

        });
}



//pick slide//
let click_mySwiper = new Swiper(".click_mySwiper", {
    loop:true,
    slidesPerView: 5,
    spaceBetween: 25,
    slidesPerGroup: 1,
    centeredSlides: false,
    speed: 500,
    navigation: {
        nextEl: ".click-next",
        prevEl: ".click-prev",
      }
  });