# 📚교보문고 eBook 클론코딩
#### **<a href="https://saemii-24.github.io/project_4/index.html" target="_blank">:point_right:<u>배포페이지 바로가기</u></a>**
<u><i>해당 프로젝트는 교보문고 eBook의 디자인을 클론해 기능을 구현한 eBook 클론코딩입니다. 사이트 기능은 스스로 구현했습니다.</i></u>
kakao Book API를 활용하기 위한 방법으로, 온라인 서점 클론코딩 프로젝트를 진행했습니다. 
교보문고를 선택한 이유는 eBook 시장에서 소비자에게 높은 선호도와 인지도를 보이고 있다는 점, UI 측면에서 사용하기 좋은 웹사이트라고 생각했기 때문입니다.


## 목차
- [개요](#개요)
- [사용된 기술](#사용된-기술)
- [주요 기능](#개요)
- [후기](#후기)


## 개요
- **프로젝트 이름**: 교보문고 eBook 클론코딩📚
- **제작기간**: 23.09.08 - 23.09.21
- **기여도**: 개인작업/100%


## 사용된 기술
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">


## 주요기능
<table>
  <tr>
    <th style="width:300px">Kakao Book API</th>
    <th style="width:300px">Swiper 슬라이드</th>
    <th style="width:300px">가상 리뷰 정렬</th>
  </tr>
  <tr>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/165c86ff-4eef-4c85-aeec-c42d03cec7b6" alt="Kakao Book API"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/974b304b-750a-4d17-82db-a797d6b724b0" alt="Swiper 슬라이드"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/89271195-5c20-4e73-ae61-fffbdec6f5c9" alt="가상 리뷰 정렬"></td>
  </tr>
</table>

<table>
  <tr>
    <th style="width:300px">최근 본 책</th>
    <th style="width:300px">접기, 펼치기</th>
    <th style="width:300px">미리보기 글자 크기 변경</th>
  </tr>
  <tr>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/dd08591a-fba2-4d14-a9d8-474905c54d66" alt="최근 본 책"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/74e0c4ef-9116-41cc-acd8-5bc8a16254e4" alt="접기, 펼치기"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/project_2/assets/139088277/dcbc9855-814a-404e-900f-15ac85190846" alt="미리보기 글자 크기 변경"></td>
  </tr>
</table>


## 후기
이번 프로젝트는 클론 코딩인 만큼 교보문고 ebook 페이지의 여러 기능을 직접 구현해 보는 것이 목표였습니다. eBook 서점인 만큼, 방대한 책 데이터를 정리하기 위해 많은 슬라이드가 존재했고, swiper를 이용해 비슷한 형태를 만들며 다양한 슬라이드를 구현해 볼 수 있었습니다.
'최근 본 책'을 담을 수 있는 부분은 사용자가 새로고침 하거나 다른 페이지로 이동해도 동일한 데이터를 유지하기 위해 localStorage를 활용했습니다. 코드를 구성하면서 동적으로 생성되어야 하는 tag가 많았는데 보안상 innerHTML 사용을 지양하고자 하니, createElement, setAttribute등으로 생성해 코드의 가독성이 좋지 않다는 문제가 있었습니다. 코드를 줄이기 위해 많이 고민했었고, 이러한 부분은 다음 리액트 프로젝트에서 해결할 수 있었습니다.
