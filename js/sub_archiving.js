let date = new Date();
let year = date.getFullYear();

let eBookArchiving = [
  {format:"eBook", id: "abc", date: `${year}-09-03`, thumbup: 3, archive: "아프리카와 아메리카의 중심축과 유라시아의 중심축은 다르다."},
  {format:"eBook", id: "def", date: `${year}-11-22`, thumbup: 6, archive: "종족 간 생물학적 차이 때문이 아니다."},
  {format:"eBook", id: "ghi", date: `${year}-12-12`,  thumbup: 3, archive: "병원균도 정복 전쟁에서는 그에 못지않게 중요했다."},
  {format:"eBook", id: "jkl", date: `${year}-01-06`, thumbup: 2, archive: "정복에 필요한 그 모든 요인이 서유라시아에서 발달하기 시작한 이유는 무엇일까?"},
  {format:"eBook", id: "mno", date: `${year-1}-03-13`,  thumbup: 9, archive: "식량 생산으로 농민은 필경사와 발명가뿐만 아니라 정치인까지 부양할 수 있었다. "},
]
let paperArchiving = [
  {foramt: "종이책", id: "asd", date: `${year}-12-25`, thumbup: 7, archive: "과거의 거듭된 실망을 교훈으로 삼아 더욱 신중을 기해야 한다."},
  {foramt: "종이책", id: "qwe", date: `${year}-10-28`,  thumbup: 5, archive: "물론 1500년경에 존재한 과학기술과 정치조직의 차이가 현대 세계의 불평등을 야기한 직접적 원인이었다."},
  {foramt: "종이책", id: "zxc", date: `${year-1}-03-04`,  thumbup: 3, archive: "공통점이라곤 없는 이질적인 종족들이 상호작용을 해온 역사는 정복과 전염병 그리고 대량 학살을 통해 형성된 현대 세계의 역사이기도 하다. "},
  {foramt: "종이책", id: "wer", date: `${year}-04-15`, thumbup: 6, archive: "현대 세계가 직면한 이 모든 문제는 얄리의 질문이 함축하고 있듯 대륙 간의 서로 다른 역사적 궤적에서 비롯된 것이다."},
  {foramt: "종이책", id: "sdf", date: `${year-1}-05-06`,  thumbup: 5, archive: "이런 인종차별적 설명을 반대하는 이유는 자명하다. 역겨운 데다 잘못된 설명이기 때문이다. "},
]
let allArchiving = eBookArchiving.concat(paperArchiving);
// console.log(allArchiving);

//데이터 정렬 (최근 순)//
function dateSort(dataArr){
  return dataArr.sort((a, b)=>{
    let dateA = parseInt(a.date.split("-").join(""));
    let dateB = parseInt(b.date.split("-").join(""))
    if(dateA > dateB) return -1;
    if(dateA < dateB) return 1;
    return 0;
    });
}
let sortEbookArchiving = dateSort(eBookArchiving); //Ebook정렬
let sortPaperArchiving = dateSort(paperArchiving); //종이책 정렬
let sortAllArchiving = dateSort(allArchiving); //모든 포맷정렬


//각 배열을 세개씩 그루핑한다.
let groupEbook = [];
let groupPaper = [];
let groupAll = [];

makeGroup(groupEbook, sortEbookArchiving);
makeGroup(groupPaper, sortPaperArchiving);
makeGroup(groupAll, sortAllArchiving);

//그루핑함수
function makeGroup(emptyArr, makeGroupArr) {
  for (let i = 0; i < Math.ceil(makeGroupArr.length/3); i++) {
    if (makeGroupArr[3 * i + 1] === undefined) {
      emptyArr.push([makeGroupArr[3 * i]]);
    } else if (makeGroupArr[3 * i + 2] === undefined) {
      emptyArr.push([makeGroupArr[3 * i], makeGroupArr[3 * i + 1]]);
    } else {
      emptyArr.push([makeGroupArr[3 * i], makeGroupArr[3 * i + 1], makeGroupArr[3 * i + 2]]);
    }
  }
}



//htmlTag만들기 (그룹배열, 배열인덱스, objIndex)
// makeHtmlTag(groupEbook, 0, 0);
function makeHtmlTag(arr, arrIndex, objIndex){ //사용할 데이터/그 데이터의 배열인덱스 / 배열안의 객체 번호/
  //들어갈 틀 만들기
  //(1)box-top
  const boxTop = $("<div>", { "class": "box-top" });
  const thumbupIcon = $("<span>", { "class": "material-symbols-outlined thumbup-icon", "text": "thumb_up" });
  const thumbupCount = $("<span>", { "class": "thumb-up__count", "text": `${arr[arrIndex][objIndex].thumbup}` })

  const share = $("<div>", { "class": "share" });
  const shareIcon = $("<div>", { "class": "material-symbols-outlined share-icon", "text": "share" });
  const snsKakao = $("<a>", { "href": "javascript:void(0)", "class": "bg-text share__sns", "text": "카카오톡" });
  const snsLine = $("<a>", { "href": "javascript:void(0)", "class": "bg-text share__sns", "text": "라인" });
  const snsBand = $("<a>", { "href": "javascript:void(0)", "class": "bg-text share__sns", "text": "네이버밴드" });
  const snsFaceBook = $("<a>", { "href": "javascript:void(0)", "class": "bg-text share__sns", "text": "페이스북" });
  const snsTwitter = $("<a>", { "href": "javascript:void(0)", "class": "bg-text share__sns", "text": "트위터" });
  const snsLink = $("<a>", { "href": "javascript:void(0)", "class": "bg-text share__sns", "text": "링크" });
  const closeIcon = $("<a>", { "href": "javascript:void(0)", "class": "share__sns share__sns__close material-symbols-outlined", "text": "close" });
  share.append(shareIcon, snsKakao, snsLine, snsBand, snsFaceBook, snsTwitter, snsLink, closeIcon);
  boxTop.append(thumbupIcon, thumbupCount, share);

  //(2)box-middle
  const boxMiddle = $("<div>", { "class": "box-middle archive", "text": `${arr[arrIndex][objIndex].archive}`});

  //(3)box-button
  const boxBottom = $("<button>", { "class": "box-bottom download-btn" });
  const downloadIcon = $("<span>", { "class": "material-symbols-outlined", "text": "download" });
  const downloadText = $("<span>", { "text": "다운로드" });
  boxBottom.append(downloadIcon, downloadText);

  //(4) box 담는 mainBox
  const mainBox = $("<div>", { "class": "main-box" });
  mainBox.append(boxTop, boxMiddle, boxBottom);

  //(5) sub-box
  const subBox = $("<div>", { "class": "sub-box" });
  const archivingId = $("<span>", { "class": "archiving-id", "text": `${arr[arrIndex][objIndex].id}****`});
  const archivingDate = $("<span>", { "class": "archiving-date",  "text": `${arr[arrIndex][objIndex].date}` });
  subBox.append(archivingId, archivingDate);

  //(6) 전부 담는 archiving-box
  const archivingBox = $("<li>", { "class": "archiving-box" });
  archivingBox.append(mainBox, subBox);

  //(7) html Tag에 넣기
  const archivingGroup = document.querySelector('.archiving-group');
  archivingBox.appendTo(archivingGroup);
}

  //(8) number 생성해서 넣기
function makeNumber(arr) { //사용할 데이터
  let archivingNumber = arr.length;
  const putNumber = document.querySelector('.put__number');

  for (let i = 0; i < archivingNumber; i++) {
    const numberLi = $("<li>", { "text": `${i + 1}` });
    numberLi.appendTo(putNumber);
  }
  const putNumberList = document.querySelectorAll('.put__number li');
  putNumberList[0].classList.add('active'); //첫번째는 처음부터 active 되어야 한다.
}




// 번호 클릭하면 인덱스번호와 같은 배열데이터로 아카이빙 생성
function makeArchive(archiveArr) { //사용할 데이터
  const putNumberList = document.querySelectorAll('.put__number li');
  putNumberList.forEach((number, index) => {
    number.addEventListener('click', () => {
      //앞서 만들어진 내용 비우기
      const archivingGroup = document.querySelector('.archiving-group');
      archivingGroup.textContent = '';
      //누른 number만 active class 더해주기
      for (let i = 0; i < archiveArr[index].length; i++) {
        makeHtmlTag(archiveArr, index, i);
      }
      putNumberList.forEach(number => { number.classList.remove('active') });
      number.classList.add('active');
      activeShareIcon();
    })
  });
}


//각 카테고리별 문장 수집 갯수 입력
function categoryCount(arr){ //사용하는 데이터
  const archivingCategoryCount = document.querySelector('.archiving .count');
  archivingCategoryCount.innerText = arr.length;
}


//문장수집 전체 tab 선택할 때 선택된 tab만 class값 넣어주기
const archivingTab = document.querySelectorAll('.archiving-tab li');

archivingTab.forEach((tab, tabIndex) => {
  tab.addEventListener('click', () => {
    archivingTab.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    //mainBox비우기
    const archivingGroup = document.querySelector('.archiving-group');
    archivingGroup.textContent = '';
    //number비우기
    const archivingNumber = document.querySelector('.archiving-number');
    archivingNumber.textContent = '';

    if (tabIndex === 0) {
      //전체를 선택할 때  
      for (let i = 0; i < groupAll[0].length; i++) {
        makeHtmlTag(groupAll, 0, i);
      }
      makeNumber(groupAll);
      makeArchive(groupAll);
      categoryCount(sortAllArchiving);
      activeShareIcon();
    } else if (tabIndex === 1) {
      //eBook을 선택할 때
      for (let i = 0; i < groupEbook[0].length; i++) {
        makeHtmlTag(groupEbook, 0, i);
      }
      makeNumber(groupEbook);
      makeArchive(groupEbook);
      categoryCount(sortEbookArchiving);
      activeShareIcon();
    } else if (tabIndex === 2) {
      //종이책을 선택할 때
      for (let i = 0; i < groupPaper[0].length; i++) {
        makeHtmlTag(groupPaper, 0, i);
      }
      makeNumber(groupPaper);
      makeArchive(groupPaper);
      categoryCount(sortPaperArchiving);
      activeShareIcon();
    }
  })
});

//로드 되자마자 한 번 실행되어야 한다.
for (let i = 0; i < groupAll[0].length; i++) {
  makeHtmlTag(groupAll, 0, i);
}
makeNumber(groupAll);
makeArchive(groupAll);
categoryCount(sortAllArchiving);

//shareIcon class active
function activeShareIcon() {
  const shares = document.querySelectorAll('.archiving .share');
  const sharecloses = document.querySelectorAll('.archiving .share__sns__close');
  shares.forEach((share) => {
    share.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
    })
  })
  sharecloses.forEach((close) => {
    close.addEventListener('click', (event) => {
      event.stopPropagation();
      event.currentTarget.parentNode.classList.remove('active');
    })
  })
}
activeShareIcon();


//sub_review로 내보낼 값
export { year, dateSort }