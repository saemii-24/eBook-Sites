const author = "재레드 다이아몬드";

const putSlide = document.querySelector('.put__slide');

//로드시 카테고리를 불러온다.
authorSearch(author);

function authorSearch(searchWord) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: searchWord, size: 15 },
        headers: { Authorization: "KakaoAK 381ddfe6fc1daf3a1b6115b0d0c98c8c" },
        async: false,
    })
        .done(function (originData) {

            const data = originData.documents;
            const filterData = data.filter(function (data) {
                //썸네일이 없는 경우 제외한다.
                return data.thumbnail != '';
            });
            console.log(filterData);


            for (let i = 0; i < 10; i++) {
                //buy-with__book
                const li = $("<li>", { "class": "sub-author-book" });

                //thumbnail
                const thumbnailAnchor = $("<a>", { "class": "thumbnail", "href": "javascript:void(0)" });
                const thumbnail = $("<img>", { "src": `${filterData[i].thumbnail}`, "alt": `${filterData[i].title} 표지` });
                thumbnail.appendTo(thumbnailAnchor);

                //title
                const title = $("<a>", { "href": "javascript:void(0)",  "text": `${filterData[i].title}`});
                thumbnailAnchor.appendTo(li);
                title.appendTo(li);
                li.appendTo(putSlide);
            }
        });
}
