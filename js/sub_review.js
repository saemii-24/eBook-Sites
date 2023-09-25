import { year, dateSort, makeNumber } from './sub_archiving.js';

let eBookReview = [
  {format:"eBook", id: "abc", date: `${year}-09-03`, grade: 4, feeling: "재밌어요", purchase: true, like: 3, comment: "좋은 책입니다! 추천해요."},
  {format:"eBook", id: "def", date: `${year}-11-22`, grade: 3, feeling: "공감돼요", purchase: true, like: 6, comment: "어렵지만 읽어보면 좋은 책이에요."},
  {format:"eBook", id: "ghi", date: `${year}-12-12`, grade: 4, feeling: "힐링돼요", purchase: false, like: 3, comment: "대학 교재라 구매했습니다. 열심히 읽어봐야겠어요."},
  {format:"eBook", id: "jkl", date: `${year}-01-06`, grade: 1, feeling: "고마워요", purchase: true, like: 2, comment: "너무 어려워서 이해하기 힘들어요."},
  {format:"eBook", id: "mno", date: `${year-1}-03-13`, grade: 4, feeling: "최고에요", purchase: false, like: 9, comment: "주위에서 추천해준 책이에요."},
  {format:"eBook", id: "pqr", date: `${year-1}-05-07`, grade: 4, feeling: "재밌어요", purchase: true, like: 11, comment: "조금씩 읽고 있습니다. 책이 워낙 두꺼워서 완독에 시간이 걸릴 듯 해요."},
  {format:"eBook", id: "stu", date: `${year}-10-31`, grade: 4, feeling: "힐링돼요", purchase: false, like: 0, comment: "어려워서 한 번 더 읽어봐야 할 것 같아요."},
  {format:"eBook", id: "vwx", date: `${year-1}-02-19`, grade: 4, feeling: "최고에요", purchase: false, like: 3, comment: "저번 보다 번역이 깔끔해진 것 같아요."},
  {format:"eBook", id: "yza", date: `${year}-03-28`, grade: 3, feeling: "공감돼요", purchase: true, like: 2, comment: "인터넷 강의 보고 궁금해서 구매했습니다!"},
  {format:"eBook", id: "bcd", date: `${year}-04-17`, grade: 4, feeling: "재밌어요", purchase: false, like: 1, comment: "정말 공부가 되는 책입니다."},
]
let paperReview = [
  {format: "종이책", id: "asd", date: `${year}-01-02`, grade: 4, feeling: "최고에요", purchase: true, like: 7, comment: "전자책으로 나와서 너무 좋네요~ 바로 구매했어요!"},
  {format: "종이책", id: "qwe", date: `${year}-02-03`, grade: 4, feeling: "재밌어요", purchase: false, like: 5, comment: "재밌게 읽었어요!"},
  {format: "종이책", id: "zxc", date: `${year-1}-03-04`, grade: 3, feeling: "힐링돼요", purchase: false, like: 3, comment: "베스트셀러인 이유가 있는 책이에요. 흥미로웠습니다."},
  {format: "종이책", id: "wer", date: `${year}-04-15`, grade: 2, feeling: "고마워요", purchase: true, like: 6, comment: "문명에 대해 생각해볼 수 있었어요!"},
  {format: "종이책", id: "sdf", date: `${year-1}-05-06`, grade: 4, feeling: "최고에요", purchase: false, like: 5, comment: "대학생때 도서관에서 읽었는데 이제 기억이 가물가물 해져서 다시 읽으려구요."},
  {format: "종이책", id: "xcv", date: `${year}-06-27`, grade: 4, feeling: "재밌어요", purchase: true, like: 9, comment: "완독에 도전해보려구요!"},
  {format: "종이책", id: "rty",  date: `${year}-07-08`, grade: 4, feeling: "최고에요", purchase: true, like: 1, comment: "딸과 함께 읽으려구요~ 공부가 될 것 같아요."},
  {format: "종이책", id: "ert", date: `${year-1}-08-29`, grade: 4, feeling: "힐링돼요", purchase: false, like: 3, comment: "인류 문명의 발전에 대해 생각해볼 수 있었어요."},
  {format: "종이책", id: "dfg", date: `${year}-09-10`, grade: 4, feeling: "재밌어요", purchase: true, like: 6, comment: "현대의 고전이란 수식어가 잘 어울리는 책입니다."},
  {format: "종이책", id: "cvb", date: `${year}-10-11`, grade: 4, feeling: "공감돼요", purchase: false, like: 0, comment: "저자 강의가 흥미로워서 책도 읽어보고 싶네요~"},
]
let allReview = eBookReview.concat(paperReview);
let purchaseReview = eBookReview.filter(review=> review.purchase === true)
                    .concat(paperReview.filter(review=> review.purchase === true));
// console.log(purchaseReview);

//사용자 총점
let averageGrade = allReview.map(review=>{
   return review.grade;
})
// console.log(averageGrade);
const sum = averageGrade.reduce((a, b)=> a + b, 0);
const average = sum / averageGrade.length;

//grade는 4점 만점이므로 이를 10점으로 환산한다.
const tenAverage = ((average*10)/4).toFixed(1);
const putGrade = document.querySelector('.now-clover');
putGrade.innerText = tenAverage;

//grade를 %점수로 환산한다.
const grade4 = allReview.filter(review=>review.grade===4).length*(100/allReview.length)
const grade3 = allReview.filter(review=>review.grade===3).length*(100/allReview.length)
const grade2 = allReview.filter(review=>review.grade===2).length*(100/allReview.length)
const grade1 = allReview.filter(review=>review.grade===1).length*(100/allReview.length)
const gradePercent = [grade4, grade3, grade2, grade1];
const maxPercent = Math.max(...gradePercent);
const maxIndex = gradePercent.indexOf(maxPercent);

const putGradePercent = document.querySelectorAll('.clover-percent');
const gradeGage = document.querySelectorAll('.clover-meter .meter-gage');

gradePercent.forEach((grade, index)=>{
    putGradePercent[index].innerText = `${grade.toFixed(0)}%`;
    gradeGage[index].style.width = `${grade.toFixed(0)}%`;
});
//grade가 제일 큰 %에 active class를 준다.
gradeGage[maxIndex].classList.add('active');


//사용자 각각 feeling 갯수 세고 % 환산
const feelThanks = allReview.filter(review=>review.feeling==="고마워요").length*(100/allReview.length);
const feelGreat = allReview.filter(review=>review.feeling==="최고에요").length*(100/allReview.length);
const feelRelate = allReview.filter(review=>review.feeling==="공감돼요").length*(100/allReview.length);
const feelFun = allReview.filter(review=>review.feeling==="재밌어요").length*(100/allReview.length);
const feelHealing = allReview.filter(review=>review.feeling==="힐링돼요").length*(100/allReview.length);
const feelingArr = ["고마워요", "최고에요", "공감돼요","재밌어요", "힐링돼요"]
const feelPercent = [feelThanks, feelGreat, feelRelate, feelFun, feelHealing];
const maxPercentFeel = Math.max(...feelPercent);
const maxIndexFeel = feelPercent.indexOf(maxPercentFeel);

const putFeelPercent = document.querySelectorAll('.review-percent');
const feelGage = document.querySelectorAll('.review-meter .meter-gage');

feelPercent.forEach((feel, index)=>{
    putFeelPercent[index].innerText = `${feel.toFixed(0)}%`;
    feelGage[index].style.height = `${feel.toFixed(0)}%`;
});

//제일 많이 응답한 reviewFill 채우기
const reviewFillPercent = document.querySelector('.review-feel-percent');
const reviewFill = document.querySelector('.review-feel-max');
const reviewBar = document.querySelectorAll('.review-bar');
reviewBar[maxIndexFeel].classList.add('active');
reviewFillPercent.innerText = `${feelPercent[maxIndexFeel].toFixed(0)}%`;
reviewFill.innerText = `${feelingArr[maxIndexFeel]}`;


//htmlTag만들기
const putReview = document.querySelector('.review .put__review');
function makeReviewHtmlTag(arr, arrIndex, objIndex){ //사용할 데이터/그 데이터의 배열인덱스 / 배열안의 객체 번호/
    //(1)review-content-top만들기
    const reviewTop = $("<div>", {"class": "review-content-top"});
        const categoryBtn = $("<button>", {"class": `review-category ${arr[arrIndex][objIndex].format}`, "text": `${arr[arrIndex][objIndex].format}`});
        const reviewId = $("<p>", {"class": "review-id", "text": `${arr[arrIndex][objIndex].id}****`});
        const reviewDate = $("<p>", {"class": "review-date", "text": `${arr[arrIndex][objIndex].date}`});
        const reviewReport = $("<a>", {"class": "reveiw-report", "text": "신고/차단", "href": "javascript:void(0)"});  

    const reviewClover = $("<div>", {"class": `review-clover grade_${arr[arrIndex][objIndex].grade}`});
        const clover1 = $("<div>", {"class":"clover-img bg-text"});
        const clover2 = $("<div>", {"class":"clover-img bg-text"});
        const clover3 = $("<div>", {"class":"clover-img bg-text"});
        const clover4 = $("<div>", {"class":"clover-img bg-text"});
    reviewClover.append(clover1, clover2, clover3, clover4);

    const spanSlash = $("<span>", {"text": "/"});
    
    const reviewFeel = $("<div>", {"class": "review-feel"});
        const quotesImg = $("<img>", {"src": "./images/quotes.png", "alt": "따옴표"});
        const feeling = $("<span>", {"text": `${arr[arrIndex][objIndex].feeling}`});
    reviewFeel.append(quotesImg, feeling);

    if(arr[arrIndex][objIndex].purchase===true){
        const purchaseBtn = $("<button>", {"class": "purchase", "text": "구매자"});
        reviewTop.append(categoryBtn,purchaseBtn,reviewId,reviewDate,reviewReport,reviewClover,spanSlash,reviewFeel);
    }else{
        reviewTop.append(categoryBtn,reviewId,reviewDate,reviewReport,reviewClover,spanSlash,reviewFeel);
    }

    //(2)review-content-middle만들기
    const reviewMiddle = $("<div>", {"class": "review-content-middle", "text":`${arr[arrIndex][objIndex].comment}`});
    
    //(3)review-content-bottom만들기
    const reviewBottom = $("<div>", {"class": "review-content-bottom"});
    const thumbup = $("<div>", {"class": "thumb-up"});
        const thumbupIcon = $("<span>", {"class": "material-symbols-outlined", "text": "thumb_up"});
        const thumbupText = $("<span>", {"class": "thumb-up-count", "text" : `${arr[arrIndex][objIndex].like}`});
    thumbup.append(thumbupIcon, thumbupText);
    
    const reply = $("<div>", {"class": "reply"});
        const replyIcon = $("<span>", {"class": "material-symbols-outlined", "text": "sms"});
        const replyText = $("<span>", {"text" : "답글"});
    reply.append(replyIcon, replyText);    
    reviewBottom.append(thumbup, reply);
    
    //(4)코드 정리
    const li = $("<li>");
    li.append(reviewTop, reviewMiddle, reviewBottom);
    // putReview.append(li);
    li.appendTo(putReview);
}

//정보 그룹짓기
let sortEbookReview = dateSort(eBookReview); //Ebook정렬
let sortPaperReview = dateSort(paperReview); //종이책 정렬
let sortAllReview = dateSort(allReview); //모든 포맷정렬
let sortPurchaseReview = dateSort(purchaseReview); //구매 포맷정렬

//각 배열을 다섯 개씩 그루핑한다.
//(1) 최신순 그루핑
let groupReviewEbook = []; 
let groupReviewPaper = [];
let groupReviewPurchase = [];
let groupReviewAll = [];
makeReviewGroup(groupReviewEbook, sortEbookReview);
makeReviewGroup(groupReviewPaper, sortPaperReview);
makeReviewGroup(groupReviewPurchase, sortPurchaseReview);
makeReviewGroup(groupReviewAll, sortAllReview);

//(2) 좋아요순 그루핑
//좋아요 순 정렬
function likeSort(arr){
  return arr.sort((a, b)=>{
    let likeA = a.like
    let likeB = b.like
    if(likeA > likeB) return -1;
    if(likeA < likeB) return 1;
    return 0;
    });
}

let groupLikeEbook = [];
let groupLikePaper = [];
let groupLikePurchase = [];
let groupLikeAll = [];
makeReviewGroup(groupLikeEbook, likeSort(eBookReview));
makeReviewGroup(groupLikePaper, likeSort(paperReview));
makeReviewGroup(groupLikePurchase, likeSort(purchaseReview));
makeReviewGroup(groupLikeAll, likeSort(allReview));

//그루핑함수
function makeReviewGroup(emptyArr, makeGroupArr) {
    for (let i = 0; i < Math.ceil(makeGroupArr.length/5); i++) {
      if (makeGroupArr[5 * i + 1] === undefined) {
        emptyArr.push([makeGroupArr[5 * i]]);

      } else if (makeGroupArr[5 * i + 2] === undefined) {
        emptyArr.push([makeGroupArr[5 * i], makeGroupArr[5 * i + 1]]);

      } else if (makeGroupArr[5 * i + 3] === undefined) {
        emptyArr.push([makeGroupArr[5 * i], makeGroupArr[5 * i + 1], 
          makeGroupArr[5 * i + 2]]);
      }else if (makeGroupArr[5 * i + 4] === undefined) {
        emptyArr.push([makeGroupArr[5 * i], makeGroupArr[5 * i + 1], 
          makeGroupArr[5 * i + 2], makeGroupArr[5 * i + 3]]);
      }else{
        emptyArr.push([makeGroupArr[5 * i], makeGroupArr[5 * i + 1], 
          makeGroupArr[5 * i + 2], makeGroupArr[5 * i + 3], makeGroupArr[5 * i + 4]]);
      }
    }
}

  

  // // 번호 클릭하면 인덱스번호와 같은 배열데이터로 아카이빙 생성
  function makeReview(arr) { //사용할 데이터
    const putNumberList = document.querySelectorAll('.review-number li');
    putNumberList.forEach((number, index) => {
      number.addEventListener('click', () => {
        //앞서 만들어진 내용 비우기
        const putReview = document.querySelector('.put__review');
        putReview.textContent = '';
        //누른 number만 active class 더해주기
        for (let i = 0; i < arr[index].length; i++) {
          makeReviewHtmlTag(arr, index, i);
        }
        putNumberList.forEach(number => { number.classList.remove('active') });
        number.classList.add('active');
      })
    });
  }


//탭 선택에 따라 html 태그 만들기 달라짐
const putReviewNumber = document.querySelector('.review-number');
const reviewTab = document.querySelectorAll('.review_tab li');
const sortStand = document.querySelectorAll('.review_select ul li');
const sortStandText = document.querySelector('.review_select button span:first-child');
// console.log(sortStandText);

//정렬기준 선택하기
const sortStandBtn = document.querySelector('.review_select');
sortStandBtn.addEventListener('click',(e)=>{
  sortStandBtn.classList.toggle('active');
});


sortStand.forEach((stand, index)=>{
  stand.addEventListener('click',(event)=>{
    sortStandText.textContent = event.target.innerText;
    const categoryTabIndex = Array.from(document.querySelectorAll('.review_tab li')).indexOf(document.querySelector('.review_tab .active'));

    // console.log(categoryTabIndex);

      //review박스 비우기
      const putReview = document.querySelector('.put__review');
      putReview.textContent = '';
      //number 비우기
      const putNumber = document.querySelector('.review-bottom');
      putNumber.textContent = '';

    if(sortStandText.innerText==="좋아요 순"){
      if(categoryTabIndex===0){
        makeTag(groupLikeAll, putReviewNumber);
      }else if(categoryTabIndex===1){
        makeTag(groupLikeEbook, putReviewNumber);
      }else if(categoryTabIndex===2){
        makeTag(groupLikePaper, putReviewNumber);
      }else if(categoryTabIndex===3){
        makeTag(groupLikePurchase, putReviewNumber);
      }
    }else{
      if(categoryTabIndex===0){
        makeTag(groupReviewAll, putReviewNumber);
      }else if(categoryTabIndex===1){
        makeTag(groupReviewEbook, putReviewNumber);
      }else if(categoryTabIndex===2){
        makeTag(groupReviewPaper, putReviewNumber);
      }else if(categoryTabIndex===3){
        makeTag(groupReviewPurchase, putReviewNumber);
      }
    }
  });
})



reviewTab.forEach((tab, index)=>{
    tab.addEventListener('click',()=>{
        reviewTab.forEach((tab)=>tab.classList.remove('active'));
        tab.classList.add('active');
        //review박스 비우기
        const putReview = document.querySelector('.put__review');
        putReview.textContent = '';
        //number 비우기
        const putNumber = document.querySelector('.review-bottom');
        putNumber.textContent = '';

        if(index===0){ //전체
          if(sortStandText.innerText==="좋아요 순"){
            makeTag(groupLikeAll, putReviewNumber);
          }else{
            makeTag(groupReviewAll, putReviewNumber);
          }
        }else if(index===1){ //eBook
          if(sortStandText.innerText==="좋아요 순"){
            makeTag(groupLikeEbook, putReviewNumber);
          }else{
            makeTag(groupReviewEbook, putReviewNumber);
          }
        }else if(index===2){ //종이책
          if(sortStandText.innerText==="좋아요 순"){
            makeTag(groupLikePaper, putReviewNumber);
          }else{
            makeTag(groupReviewPaper, putReviewNumber);
          }
        }else if(index===3){//구매
          if(sortStandText.innerText==="좋아요 순"){
            makeTag(groupLikePurchase, putReviewNumber);
          }else{
            makeTag(groupReviewPurchase, putReviewNumber);
          }
      }
  })
})
//로드 되면 먼저 실행
makeTag(groupLikeAll, putReviewNumber);

function makeTag(arr, number){ //사용될 데이터, number
  for (let i = 0; i < arr[0].length; i++) {
    makeReviewHtmlTag(arr, 0, i);
  }
  makeNumber(arr,number);
  makeReview(arr);
}

//reviewCount
const reviewCount = document.querySelector('.review .count');
reviewCount.innerText = allReview.length;