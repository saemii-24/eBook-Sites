  const audioList = [
    '매우 예민한 사람들을 위한 상담소',
    '책과 우연들',
    '수상한 놀이공원 천옥원',
    '글로 지은 집',
    '영어책 한 권 외워봤니?',
    '강원도의 맛',
    '불필요한 생각 버리기 연습',
    '이웃 사냥',
    '이상한 과자 가게 전천당 18',
    '좋은 날 하자',
    '초마인드',
    '저도 과학은 어렵습니다만',
    '오리엔트 특급 살인',
    '스키니 시티',
    '당신의 밤이 편안했으면 해',
    '플로라'
    ];

  const putAudio = document.querySelector('.audio__put');
  
  
  //로드시 카테고리를 불러온다.
  audioList.forEach((audioEl)=>{
    audioSearch(audioEl);
  });
  
  function audioSearch(searchWord) {
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
                thumbnail.setAttribute("href", "./sub.html");
  
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
                titleLink.setAttribute("href", "./sub.html");
  
                const author = document.createElement("div");
                author.setAttribute("class", "author");
                author.textContent = filterData[i].authors;    

                //묶음을 정리한다.
                thumbnail.append(img);
                titleLink.append(title);
                info.append(titleLink,author);
                slide.append(thumbnail,info);
                putAudio.append(slide);
  
        });
  }
  
  
  
  //pick slide//
  let audio_mySwiper = new Swiper(".audio_mySwiper", {
    loop:true,
    slidesPerView: 7,
    spaceBetween: 35,
    slidesPerGroup: 1,
    centeredSlides: false,
    speed: 50,  
    navigation: {
        nextEl: ".audio-next",
        prevEl: ".audio-prev",
      }
  });