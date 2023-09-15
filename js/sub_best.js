const bestList = [
"총균쇠 ", 
"역사란 무엇인가", 
"그들은 왜 최후의 승자가 되지 못했나", 
"낯선 곳에서 나를 만나다", 
"[증보판] 자치통감. 권294"]

const putBest = document.querySelector('.put__best');

  //로드시 카테고리를 불러온다.
  bestList.forEach((bestEl, index)=>{
    bestSearch(bestEl, index);
  });
  
  function bestSearch(searchWord, index) {
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
            console.log(filterData);
            //buy-with__book
            const li = $("<li>", {"class": "best__book"});

            //thumbnail
            const thumbnailAnchor = $("<a>", {"class": "thumbnail", "href": "javascript:void(0)"});
            const thumbnail = $("<img>", {"src": `${filterData[0].thumbnail}`, "alt": `${filterData[0].title} 표지`});
            thumbnail.appendTo(thumbnailAnchor);

            //info
            const info = $("<div>", {"class": "info"});
            //num
            const num = $("<div>", {"class" : "num", "text": index+1});

            //title
            const titleAnchor = $("<a>", {"href": "javascript:void(0)"});
            const title = $("<div>", {"class": "title", "text" : `${filterData[0].title}`});
            title.appendTo(titleAnchor);
            //author
            const author = $("<div>", {"class": "author", "text": `${filterData[0].authors[0]}`});

            //price
            const price = $("<div>", {"class": "price"});
            const sale_price = $("<span>", {"class": "bold-text", "text": `${filterData[0].price.toLocaleString()}`});
            const won = $("<span>", {"class": "won", "text": "원"});
            sale_price.appendTo(price);
            won.appendTo(price);

            num.appendTo(info);
            titleAnchor.appendTo(info);
            author.appendTo(info);
            price.appendTo(info);

            thumbnailAnchor.appendTo(li);
            info.appendTo(li);
            li.appendTo(putBest);
        });
  }
  
const nums =  document.querySelectorAll('.num');
nums[0].classList.add('num__first');