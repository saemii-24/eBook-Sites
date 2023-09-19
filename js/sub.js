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
