//select notice mark
const noticeMark = document.querySelector('.title-notice');
const noticeMarkInfo = document.querySelector('.title-notice__box');
const noticeClose = document.querySelector('.title-notice__box .close-symbol');
noticeMark.addEventListener('click',()=>{
  noticeMarkInfo.classList.toggle('active');
});
noticeClose.addEventListener('click',()=>{
  noticeMarkInfo.classList.remove('active');
});


const slideEmpasisList = [
    '한 문장',
    '곱씹어',
    '모두에게',
    '모두가',
    '행운이',
    '읽기'
];
const slideTitleList = [
    ' 기억에 남는 eBook',
    ' 보게 되는 eBook',
    ' 사랑 받는 eBook',
    ' 많이 읽은 eBook',
    ' 가득한 eBook',
    ' 멈출 수 없는 eBook'
];

const selectCategory = [
    '생각에 관한 생각',
    '작은 땅의 야수들',
    '퓨처 셀프',
    '편향의 종말',
    '삶은 예술로 빛난다',
    '작은 땅의 야수들'
];

const putSelect = document.querySelector('.select__put');

selectCategory.forEach((selectEl, index) => {
    selectSearch(selectEl, index);
    // console.log(index);
});

function selectSearch(searchWord, i) {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: searchWord, size: 3 },
        headers: { Authorization: "KakaoAK 381ddfe6fc1daf3a1b6115b0d0c98c8c" },
        async: false
    })
        .done(function (originData) {

            const data = originData.documents;
            const filterData = data.filter(function (data) {
                //썸네일이 없는 경우 제외한다.
                return data.thumbnail != '';
            });
            // console.log(filterData[0].title);

            //상위요소 slide 생성
            const slide = document.createElement("div");
            slide.setAttribute("class", "swiper-slide js-history-target");

            //1번 묶음

            //slideTitle생성
            const slideEmpasis = document.createElement("div");
            slideEmpasis.setAttribute("class", "slideTitle__emphasis");
            slideEmpasis.textContent = slideEmpasisList[i];

            //slideEmpasis생성
            const slideTitle = document.createElement("span");
            slideTitle.setAttribute("class", "slideTitle");
            slideTitle.textContent = slideTitleList[i];

            //2번 묶음
            const slideInfo = document.createElement("div");
            slideInfo.setAttribute("class", "slideInfo");

            const thumbnail = document.createElement("a");
            thumbnail.setAttribute("class", "thumbnail");
            thumbnail.setAttribute("href", "javascript:void(0)");

            const img = document.createElement("img");
            img.setAttribute("src", `${filterData[0].thumbnail}`);
            img.setAttribute("alt", `${filterData[0].title} 이미지`);

            const info = document.createElement("div");
            info.setAttribute("class", "info");

            const title = document.createElement("div");
            title.setAttribute("class", "title");
            title.textContent = filterData[0].title;

            const titleLink = document.createElement("a");
            titleLink.setAttribute("href", "javascript:void(0)");

            const author = document.createElement("div");
            author.setAttribute("class", "author");
            author.textContent = filterData[0].authors;

            //묶음을 정리한다.
            thumbnail.append(img);
            titleLink.append(title);
            info.append(titleLink, author);
            slideInfo.append(thumbnail, info);
            slideEmpasis.append(slideTitle);
            slide.append(slideEmpasis, slideInfo);
            putSelect.append(slide);
            // console.log(putSelect);
        });
}



//select slide//
let select_mySwiper = new Swiper(".select_mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    speed: 500,
    navigation: {
        nextEl: ".select-next",
        prevEl: ".select-prev",
    },
});