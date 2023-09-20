const dataArr = [];
const detailObj = new Object(); //detail정보가 들어감
const guideObj = new Object();  //guide정보가 들어감

function callCSV(csvName, makeObj) {
  $.ajax({
    url: csvName,
    dataType: "text",
    async: false,
    success: function (csvData) {
      // console.log(csvData);
      const arrData = csvData.split(/\/key\/,|,\/value\/,/); //[/key/,] 혹은 [,/value/,] 로 구분
      arrData.shift(); //배열 첫번째로 들어가는 공백 제거
      // console.log(arrData);

      for (i = 0; i < arrData.length; i += 2) {
        //"" 안의 글자만 추출해 객체에 할당한다. (글을 싸고 있는 쌍따옴표 제거)
        makeObj[arrData[i]] = arrData[i + 1].slice(1,arrData[i + 1].length - 3);
      }
      // console.log(makeObj);
    },
  });
}

callCSV('./data/book_detail.csv',detailObj); //book detail 정보를 불러온다.
const {
  목차: category,
  책소개: introduce,
  책속으로: preview,
  출판사서평: publish,
  저자: author,
  번역: translator
} = detailObj;

const putAuthor= document.querySelector('.put__author');
putAuthor.innerText = author;
const putTranslator= document.querySelector('.put__translator');
putTranslator.innerText = translator;
const putIntroduce= document.querySelector('.put__introduce');
putIntroduce.innerText = introduce;
const putCategory= document.querySelector('.put__category');
putCategory.innerText = category;
const putPreivew= document.querySelector('.put__preview');
putPreivew.innerText = preview;
const putPublish= document.querySelector('.put__publish');
putPublish.innerText = publish;



callCSV('./data/ebook_guide.csv',guideObj); //ebook guide 정보를 불러온다.
// console.log(guideObj);
const {
  구매안내: purchase,
  단말기안내: device,
  배상안내: compensation,
  용량제한안내: capacity,
  이용안내: use,
} = guideObj;

const guideArr = [purchase, device, capacity, use, compensation];
const putGuide = document.querySelectorAll('.put__guide');


guideArr.forEach((guide,index)=>{
  makeLiTag(putGuide[index], guide);
});

function makeLiTag(htmlTag, data){
  const splitData = data.split('\r\n');
  // console.log(splitData);
  for(value of splitData){
    const liTag = document.createElement( 'li' );
    liTag.innerText = value;
    htmlTag.append(liTag);
  }
}

//makeBtn
/*<button>
  <span>바로가기</span>
  <span class="material-symbols-outlined">navigate_next</span>
</button>*/

const spanText = $("<span>", {"class": "btn-text", "text": "바로가기"});
const spanIcon = $("<span>", {"class": "btn-icon, material-symbols-outlined", "text": "navigate_next"});
const shortcutBtn = $("<button>", {"class": "shortcut"});
const putBtn = document.querySelector('.use-detail li:nth-of-type(7)');

spanText.appendTo(shortcutBtn);
spanIcon.appendTo(shortcutBtn);
shortcutBtn.appendTo(putBtn);
