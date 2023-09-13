const eventList = [
    {"👀 교보eBook 첫 만남" : ["김상욱 교수의 세상 다정한 물리이야기", "똑똑! 누구니? 선물 왔어요!", "교보e캐시 최대 20% 더드림", "내게 빌어봐의 모든 것.zip", "매월 1일~5일, 스타트캐시", "원스토어에서 만나는 새로운 교보eBook!" ]},
    {"🥳 날마다 푸짐한 혜택" : ["하반기 갓생 살기! 오디오북 기획전", "교보eBook 단독 한눈에!", "두 번 봐야 진짜다!" ]},
    {"🤩 날마다 짜릿한 스토리" : ['세이노의 가르침을 무료로!', "내게 빌어봐 오디오드라마 티저 공개", "도전! 로B 퀴즈", "제 4회 합동BL공모전 수상작 발표", "장르 혜택 지도 M.A.P", ]},
    {"🐳 sam솟는 즐거움" : ["전권대여 하면 반값!", "LUNA와 sam의 달달한 혜택 모음!", "교보 첫 오리지널 오디오북", "데이터도 맘껏! 전차잭도 맘껏!", "모두가 뭐든지, 무한 독서!", ]}
    ];

const eventPut = document.querySelector('.put__event');

//html태그 만들기
let imgCount = 1;

for(eventCategory of eventList){
    const title = document.createElement('li');
    title.textContent = Object.keys(eventCategory);
    const imgUl = document.createElement('ul');
    imgUl.setAttribute('class', 'img-box');
    
    for(eventOne in eventCategory){
        for(let i = 0; i<eventCategory[eventOne].length; i++){
            
            const eventLi = document.createElement('li');
            const imgAnchor = document.createElement('a');
            imgAnchor.setAttribute('href', 'javascript:void(0)');
            const eventImg = document.createElement('img');
            eventImg.setAttribute('src', `./images/slider${imgCount}.jpg`);
            eventImg.setAttribute('alt', eventCategory[eventOne][i]);
            imgCount++;

            imgAnchor.append(eventImg);
            eventLi.append(imgAnchor);
            imgUl.append(eventLi);
            title.append(imgUl);
            eventPut.append(title);
        }
    }
}


//eventModal 토글하기
const eventModal = document.querySelector('.event-modal');
const eventModalOpen = document.querySelector('.slide__now p');
const eventModalClose = document.querySelector('.event-close');

eventModalOpen.addEventListener('click',()=>{
    eventModal.style.display = 'block';
    document.body.style.overflow = "hidden";
});
eventModalClose.addEventListener('click',()=>{
    eventModal.style.display = 'none';
    document.body.style.overflow = "unset";
    
});

