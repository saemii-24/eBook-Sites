let date = new Date();
let year = date.getFullYear();

let eBookReview = [
  {format:"eBook", id: "abc", date: `${year}-09-03`, grade: 4, feeling: "재밌어요", purchase: true, like: 3, comment: "좋은 책입니다! 추천해요."},
  {format:"eBook", id: "def", date: `${year}-11-22`, grade: 3, feeling: "공감돼요", purchase: true, like: 6, comment: "어렵지만 읽어보면 좋은 책이에요."},
  {format:"eBook", id: "ghi", date: `${year}-12-12`, grade: 4, feeling: "힐링돼요", purchase: false, like: 3, comment: "대학 교재라 구매했습니다. 열심히 읽어봐야겠어요."},
  {format:"eBook", id: "jkl", date: `${year}-01-06`, grade: 3, feeling: "고마워요", purchase: true, like: 2, comment: "너무 어려워서 이해하기 힘들어요."},
  {format:"eBook", id: "mno", date: `${year-1}-03-13`, grade: 4, feeling: "최고에요", purchase: false, like: 9, comment: "주위에서 추천해준 책이에요."},
  {format:"eBook", id: "pqr", date: `${year-1}-05-07`, grade: 4, feeling: "재밌어요", purchase: true, like: 11, comment: "조금씩 읽고 있습니다. 책이 워낙 두꺼워서 완독에 시간이 걸릴 듯 해요."},
  {format:"eBook", id: "stu", date: `${year}-10-31`, grade: 4, feeling: "힐링돼요", purchase: false, like: 0, comment: "어려워서 한 번 더 읽어봐야 할 것 같아요."},
  {format:"eBook", id: "vwx", date: `${year-1}-02-19`, grade: 4, feeling: "최고에요", purchase: false, like: 3, comment: "저번 보다 번역이 깔끔해진 것 같아요."},
  {format:"eBook", id: "yza", date: `${year}-03-28`, grade: 3, feeling: "공감돼요", purchase: true, like: 2, comment: "인터넷 강의 보고 궁금해서 구매했습니다!"},
  {format:"eBook", id: "bcd", date: `${year}-04-17`, grade: 4, feeling: "재밌어요", purchase: false, like: 1, comment: "정말 공부가 되는 책입니다."},
]
let paperReview = [
  {foramt: "종이책", id: "asd", date: `${year}-01-02`, grade: 4, feeling: "최고에요", purchase: true, like: 7, comment: "전자책으로 나와서 너무 좋네요~ 바로 구매했어요!"},
  {foramt: "종이책", id: "qwe", date: `${year}-02-03`, grade: 4, feeling: "재밌어요", purchase: false, like: 5, comment: "재밌게 읽었어요!"},
  {foramt: "종이책", id: "zxc", date: `${year-1}-03-04`, grade: 3, feeling: "힐링돼요", purchase: false, like: 3, comment: "베스트셀러인 이유가 있는 책이에요. 흥미로웠습니다."},
  {foramt: "종이책", id: "wer", date: `${year}-04-15`, grade: 2, feeling: "고마워요", purchase: true, like: 6, comment: "문명에 대해 생각해볼 수 있었어요!"},
  {foramt: "종이책", id: "sdf", date: `${year-1}-05-06`, grade: 4, feeling: "최고에요", purchase: false, like: 5, comment: "대학생때 도서관에서 읽었는데 이제 기억이 가물가물 해져서 다시 읽으려구요."},
  {foramt: "종이책", id: "xcv", date: `${year}-06-27`, grade: 4, feeling: "재밌어요", purchase: true, like: 9, comment: "완독에 도전해보려구요!"},
  {foramt: "종이책", id: "rty", date: `${year}-07-08`, grade: 4, feeling: "최고에요", purchase: true, like: 1, comment: "딸과 함께 읽으려구요~ 공부가 될 것 같아요."},
  {foramt: "종이책", id: "ert", date: `${year-1}-08-29`, grade: 3, feeling: "힐링돼요", purchase: false, like: 3, comment: "인류 문명의 발전에 대해 생각해볼 수 있었어요."},
  {foramt: "종이책", id: "dfg", date: `${year}-09-10`, grade: 4, feeling: "재밌어요", purchase: true, like: 6, comment: "현대의 고전이란 수식어가 잘 어울리는 책입니다."},
  {foramt: "종이책", id: "cvb", date: `${year}-10-11`, grade: 3, feeling: "공감돼요", purchase: false, like: 0, comment: "저자 강의가 흥미로워서 책도 읽어보고 싶네요~"},
]
let allReview = eBookReview.concat(paperReview);
console.log(allReview);
let purchaseReview = eBookReview.filter(review=> review.purchase === true)
                    .concat(paperReview.filter(review=> review.purchase === true));
console.log(purchaseReview);