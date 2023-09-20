const buyList = [
    '사피엔스',
    '코스모스',
    '집중투자',
  ];
  
  const putBuy = document.querySelector('.put__buy-with');
  
  //로드시 카테고리를 불러온다.
  buyList.forEach((buyEl)=>{
    buySearch(buyEl);
  });
  
  function buySearch(searchWord) {
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

            //buy-with__book
            const li = $("<li>", {"class": "buy-with__book js-history-target"});

            //thumbnail
            const thumbnailAnchor = $("<a>", {"class": "thumbnail", "href": "javascript:void(0)"});
            const thumbnail = $("<img>", {"src": `${filterData[0].thumbnail}`, "alt": `${filterData[0].title} 표지`});
            thumbnail.appendTo(thumbnailAnchor);

            //info
            const info = $("<div>", {"class": "info"});

            //title
            const titleAnchor = $("<a>", {"href": "javascript:void(0)"});
            const title = $("<div>", {"class": "title", "text" : `${filterData[0].title}`});
            title.appendTo(titleAnchor);
            //author
            const author = $("<div>", {"class": "author", "text": `${filterData[0].authors[0]}`});

            //price
            const price = $("<div>", {"class": "price"});
            const sale = $("<span>", {"class": "sale", "text": "10%"});
            const sale_price = $("<span>", {"class": "bold-text", "text": `${filterData[0].sale_price.toLocaleString()}`});
            const won = $("<span>", {"class": "won", "text": "원"});
            sale.appendTo(price);
            sale_price.appendTo(price);
            won.appendTo(price);

            titleAnchor.appendTo(info);
            author.appendTo(info);
            price.appendTo(info);

            thumbnailAnchor.appendTo(li);
            info.appendTo(li);
            li.appendTo(putBuy);

            
        });
  }
  