const authorBookList = [
    "총균쇠",
    "문명의 붕괴",
    "대변동: 위기, 선택, 변화",
    "재레드 다이아몬드의 나와 세계",
    "어제까지의 세계",
    "초예측",
    "Collapse How Societies Choose to Fail or Survive",
    "The Rise And Fall Of The Third Chimpanzee",
    ];

const putSlide = document.querySelector('.put__slide');

//로드시 카테고리를 불러온다.
authorBookList.forEach((authorBook)=>{
    authorSearch(authorBook);
});

function authorSearch(searchWord) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: searchWord, size: 1 },
        headers: { Authorization: "KakaoAK 381ddfe6fc1daf3a1b6115b0d0c98c8c" },
        async: false,
    })
        .done(function (originData) {

            const data = originData.documents;
            const filterData = data.filter(function (data) {
                //썸네일이 없는 경우 제외한다.
                return data.thumbnail != '';
            });
            // console.log(filterData);


                //buy-with__book
                const li = $("<li>", { "class": "swiper-slide" });

                //thumbnail
                const thumbnailAnchor = $("<a>", { "class": "thumbnail", "href": "javascript:void(0)" });
                const thumbnail = $("<img>", { "src": `${filterData[0].thumbnail}`, "alt": `${filterData[0].title} 표지` });
                thumbnail.appendTo(thumbnailAnchor);

                //title
                const title = $("<a>", { "href": "javascript:void(0)",  "class": "title", "text": `${filterData[0].title}`});
                thumbnailAnchor.appendTo(li);
                title.appendTo(li);
                li.appendTo(putSlide);
        });
}

let author_mySwiper = new Swiper(".author_mySwiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: false,
  });