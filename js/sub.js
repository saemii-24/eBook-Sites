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