//main-info 혜택 더보기

const moreBtn = document.querySelectorAll('.more-icon');
const moreInfo = document.querySelectorAll('.more-info');
const moreTitle = document.querySelectorAll('.more-title');

moreBtn.forEach((more, index)=>{
    more.addEventListener('click',(event)=>{
        event.currentTarget.classList.toggle('active');
        moreInfo[index].classList.toggle('active');
        moreTitle[index].classList.toggle('active');
    });
});

//tts toggle
const ttsNoticeBtn = document.querySelector('.tts-info > button');
const ttsNotice = document.querySelector('.tts-info');
const ttsNoticeClose = document.querySelector('.tts-info .close-icon');
ttsNoticeBtn.addEventListener('click',()=>{
    ttsNotice.classList.toggle('active');
});
ttsNoticeClose.addEventListener('click',()=>{
    ttsNotice.classList.remove('active');
});

//share btn
const shareBtn = document.querySelector('.share');
const shareClose = document.querySelector('.share__sns__close');
shareBtn.addEventListener('click',()=>{
    shareBtn.classList.add('active');
});
shareClose.addEventListener('click',(event)=>{
    event.stopPropagation();
    shareBtn.classList.remove('active');
});

//preview modal
const previewBtn = document.querySelector('.preview__big');
const previewModal= document.querySelector('.preview-modal');
const previewClose = document.querySelector('.preview-modal .close-icon');
previewBtn.addEventListener('click',()=>{
    previewModal.style.display='block';
});
previewClose.addEventListener('click',()=>{ 
    previewModal.style.display='none';
});

//author-more
const foldBtns = document.querySelectorAll('.fold-btn');
foldBtns.forEach((foldBtn)=>{
    foldBtn.addEventListener('click',(event)=>{
        const thisBtn = event.currentTarget;
        const foldContent = thisBtn.previousElementSibling;       
        const foldText = thisBtn.querySelector('.fold-text');
        const foldIcon = thisBtn.querySelector('.fold-icon');
        console.log(foldContent);
        foldContent.classList.toggle('expand');
        if(foldContent.classList.contains('expand')){
            foldText.innerText = '접기';
            foldIcon.innerText = 'expand_less';
        }else{
            foldText.innerText = '펼치기';
            foldIcon.innerText = 'expand_more';
        }
    });
})
//작품소개 tab
const tabs = document.querySelectorAll('.detail-tab li');
const tabContents = document.querySelectorAll('.book-detail-box');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click',(event)=>{
        tabs.forEach((tab)=> tab.classList.remove('active'));
        tabContents.forEach((content)=> content.classList.remove('active'));
        event.target.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

//archiving-notice
const archivingContent = document.querySelector('.archiving-detail');
const archivingOpen = document.querySelector('.archiving .notice-icon')
const archivingClose = document.querySelector('.archiving .close-icon ')
archivingOpen.addEventListener('click',()=>{
    archivingContent.classList.add('active');
});
archivingClose.addEventListener('click',()=>{
    archivingContent.classList.remove('active');
});

//review-notice
const reviewContent = document.querySelector('.review-detail');
const reviewOpen = document.querySelector('.review .notice-icon')
const reviewClose = document.querySelector('.review .close-icon ')
reviewOpen.addEventListener('click',()=>{
    reviewContent.classList.add('active');
});
reviewClose.addEventListener('click',()=>{
    reviewContent.classList.remove('active');
});

//category-detail
const detailList = [
    ["eBook", "오디오(북)", "동영상"],
    ["경제경영","자기계발","시/에세이","인문","종교","소설","국어/외국어","정치/사회","역사/문화","과학/공학","IT/프로그래밍","건강/의학","가정/생활/요리","여행/취미","예술/대중문화","유아","아동","청소년","교재/수험서","외국도서","매거진","로맨스","로맨스판타지","BL","GL","판타지","무협","라이트노벨","추리","미스터리","스릴러","섹슈얼로맨스","단행본만화","웹툰"],
    ["역사일반", "역사인물", "역사기행", "세계사", "서양사", "동양사", "한국사", "풍속/민족", "문화사", "인류학/고고학", "신화/신화학", "지리학", "주제가 있는 역사", "기타"]
];

const putDetailCategory = document.querySelectorAll('.this-category-detail');
console.log(detailList[0].length);

for(let i =0; i<detailList.length; i++){
    for(let j=0; j<detailList[i].length; j++){
        const li = $("<li>");
        const anchor = $("<a>", { "href": "javascript:void(0)", "text": `${detailList[i][j]}` });
        li.append(anchor);
        li.appendTo(putDetailCategory[i]);
    }
}
const firstCategory = putDetailCategory[0].querySelectorAll('li');
firstCategory[0].classList.add('active');
const secondCategory = putDetailCategory[1].querySelectorAll('li');
secondCategory[8].classList.add('active');
const thirdCategory = putDetailCategory[2].querySelectorAll('li');
thirdCategory[0].classList.add('active');

//detail-nav 
//상품정보
const detailNav = document.querySelectorAll('#detail-nav__inner div');

const productInfo = document.querySelector('.buy-with.content-box');
const reveiwInfo = document.querySelector('.review.content-box');
const useInfo = document.querySelector('.ebook-guide.content-box');


window.addEventListener('scroll',()=>{
    const productInfoTop = productInfo.getBoundingClientRect().top;
    const reviewInfoTop = reveiwInfo.getBoundingClientRect().top;
    const useInfoTop = useInfo.getBoundingClientRect().top;
    
    if(productInfoTop<130 && reviewInfoTop>=130 && useInfoTop>=130){
        detailNav[0].classList.add('active');
        detailNav[1].classList.remove('active');
        detailNav[2].classList.remove('active');
    }else if(productInfoTop<130 && reviewInfoTop<130 && useInfoTop>=130){
        detailNav[1].classList.add('active');
        detailNav[0].classList.remove('active');
        detailNav[2].classList.remove('active');
    }else if(productInfoTop<130 && reviewInfoTop<130 && useInfoTop<130){
        detailNav[2].classList.add('active');
        detailNav[0].classList.remove('active');
        detailNav[1].classList.remove('active');
    }
});