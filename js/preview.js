const indexList = [
    "표지", 
    "저자 소개", 
    "속표지", 
    "추천사", 
    "헌사", 
    "2023년 특별서문", 
    "차례", 
    "서문", 
    "일러두기", 
    "프롤로그. 얄리의 질문", 
    "1부 | 에덴에서 카하마르카까지", 
    "1장. 출발선까지 어떤 일이 있었을까?", 
    "2장. 역사의 자연 실험", 
    "3장. 카하마르카에서의 충돌", 
    "2부 | 식량 생산의 기원과 확산", 
    "4장. 농업의 힘", 
    "5장. 역사에서 가진 자와 못 가진 자", 
    "6장. 농경, 선택의 기로", 
    "7장. 아몬드를 재배하는 법", 
    "8장. 사과가 문제였을까, 인디언이 문제였을까?", 
    "9장. 얼룩말과 불행한 결혼 그리고 ‘안나 카레니나 법칙’", 
    "10장. 드넓은 하늘과 기울어진 축", 
    "3부 | 식량에서 총, 균, 쇠로", 
    "11장. 가축의 치명적 선물", 
    "12장. 청사진과 차용한 문자", 
    "13장. 필요의 어머니", 
    "14장. 평등주의에서 도둑 정치로", 
    "4부 | 여섯 지역에 대한 구체적인 분석", 
    "15장. 얄리의 종족", 
    "16장. 어떻게 중국은 중국이 되었을까?", 
    "17장. 폴리네시아로 빠르게", 
    "18장. 반구의 충돌", 
    "19장. 어떻게 아프리카는 흑인의 땅이 되었을까?", 
    "20장. 일본인은 누구인가?", 
    "에필로그. 과학으로서 인류사의 미래", 
    "2017년 후기", 
    "감사의 글", 
    "옮긴이의 글", 
    "해제", 
    "참고문헌", 
    "판권"
];

// 목차 넣기
const putIndex = document.querySelector('.put__index');
let classIndex = 0;

for(value of indexList){
    const li = $("<li>");
    const a = $("<a>", {"text": `${value}`, "class": `a-tag`});
    a.appendTo(li);
    li.appendTo(putIndex);
    classIndex++;
}


// 목차 내용 넣기
function callCSVDetail(csvName, makeObj) {
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
          makeObj[arrData[i]] = arrData[i + 1].slice(1,arrData[i + 1].length - 2);
        }
      },
    });
  }


const previewObj = new Object(); //detail정보가 들어감
callCSVDetail('./data/preview.csv',previewObj);
// console.log(previewObj);

const {
    작가: previewAuthor,
    번역가: previewTranslator,
    차례: previewDetail,
    추천사: previewRecommendation,
    헌사: previewTribute,
  } = previewObj;

  
const putContent = [previewAuthor, previewTranslator, previewRecommendation, previewTribute, previewDetail];  
const putDetailContent = document.querySelectorAll('.detail-content');
for(i=0; i<putContent.length; i++){
    putDetailContent[i].innerText = putContent[i];
}
//목차 중 특정 a 태그만 이동이 가능하게 한다. (0~4, 6번 인덱스의 목차);
const aTag = document.querySelectorAll('.a-tag');
const tagContent = document.querySelectorAll('.put__detail-left li');
for(let i=0; i<=4; i++){
    tagContent[i].setAttribute("id", `dot_${i}`)
    aTag[i].setAttribute("href", `#dot_${i}`);
    aTag[i].style.opacity = '1';
}
tagContent[5].setAttribute("id", `dot_${i}`)
aTag[6].setAttribute("href", `#dot_${i}`);
aTag[6].style.opacity = '1';

//font-size 조정하기
const inputBox = document.querySelector('#font-size'); //input태그
const detailFontSize= document.querySelector('.put__detail-left');
// console.log(inputBox.value);

inputBox.addEventListener("input", function(e) {
    detailFontSize.style.fontSize =  `${e.target.value}px`;
    inputBg();
});

//input 버튼조작
const fontBig = document.querySelector('.fontBig');
const fontSmall = document.querySelector('.fontSmall');

fontSmall.addEventListener('click',()=>{
    inputBox.value--;
    detailFontSize.style.fontSize =  `${inputBox.value}px`;
    inputBg();
});
fontBig.addEventListener('click',()=>{
    inputBox.value++;
    detailFontSize.style.fontSize =  `${inputBox.value}px`;
    inputBg();
});

//input 배경조작
inputBg();
const percent = (inputBox.value - inputBox.min) * (100 / (inputBox.max - inputBox.min));
 inputBox.style.background = `linear-gradient(45deg, red${percent}%, blue ${100-percent}%)`;

function inputBg(){
    const percent = Math.ceil((inputBox.value - inputBox.min) * (100 / (inputBox.max - inputBox.min)));
    // console.log(percent);
    inputBox.style.background = `linear-gradient(45deg, #767676 ${percent}%, #EAEAEA ${percent}%)`;
}

//초기화 버튼
const reset = document.querySelector('.reset');
reset.addEventListener('click',()=>{
    inputBox.value = 14;
    detailFontSize.style.fontSize =  `${inputBox.value}px`;
    inputBg();
});

//x버튼 누르면 닫기 (windowClose)
const windowClose = document.querySelector('.detail-top>span');
windowClose.addEventListener('click',()=>{
    window.close();
});
