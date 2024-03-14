# 📚교보문고 eBook 클론코딩
#### **<a href="https://saemii-24.github.io/eBook-Sites/" target="_blank">:point_right:<u>배포페이지 바로가기</u></a>**
이 프로젝트는 교보문고 eBook 사이트의 클론코딩 프로젝트입니다. <br/> 
서점 구성에 필요한 책 정보는 Kakao Book API와 AJAX를 활용하였고, 실제 웹 서비스에서,<br/> 다양한 책 데이터를 정리해 보여주고자 사용하는 Swiper 라이브러리를 적용해보며,<br/>웹 제작에 필요한 디자인 구조와 프론트엔드 기술을 학습하고자 했습니다.


## 목차
- [개요](#개요)
- [사용된 기술](#사용된-기술)
- [주요 기능](#주요-기능)
- [기능별 설명](#기능별-설명)
- [후기](#후기)


## 개요
- **프로젝트 이름**: 교보문고 eBook 클론코딩📚
- **제작기간**: 23.09.08 - 23.09.21
- **기여도**: 개인작업/100%
- **페이지**: 메인페이지, 상세페이지, 책 미리보기 페이지


## 사용된 기술
##### 📌구현
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> 
##### 📌API / 통신
<img src="https://img.shields.io/badge/Kakao Book API-FEE500?style=for-the-badge&logo=Kakao Book AP&logoColor=white"> <img src="https://img.shields.io/badge/ajax-258CCF?style=for-the-badge&logo=ajax&logoColor=white">


## 주요 기능
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

## 기능별 설명
1. **Kakao Book API**<br/>
  Kakao Book API와 Ajax를 이용해 eBook 서점 구성에 필요한 가격, 책 표지, 작가 정보를 받아오고 JavaScript의 ```createElement```, ```setAttribute```, ```append``` 등을 이용해 tag를 구성했습니다.
2. **Swiper 슬라이드**<br/>
  책 정보를 정리한 다양한 형태의 slide가 많아 Swiper를 이용해 슬라이드를 구성했습니다.
3. **가상 리뷰 정렬**<br/>
    가상의 리뷰 데이터를 만들어 리뷰 section을 구성했습니다. **상단 탭**과 **좋아요 순/최신순**, **페이지네이션**을 클릭하면 해당하는 데이터를 ```filter```, ```sort```, 그룹화를 통해 업데이트 합니다.
4. **최근 본 책**<br/>
   페이지가 변경되어도 최근 본 책 데이터를 유지할 수 있도록 ```localStorage```를 이용했습니다. 메인/서브 페이지에 있는 책 표지를 클릭하면 해당 책의 제목이 최대 5개까지 ```localStorage```에 저장됩니다. 사용자가 최근 본 책 아이콘을 클릭하면, 저장된 책의 제목을 이용해 가격, 책 표지 정보를 요청해 데이터를 보여줍니다.
5. **접기, 펼치기**<br/>
   상세페이지와 책 미리보기 페이지의 경우 글의 양이 많기 때문에 csv 파일로 정리한 다음 ajax로 불러와 사용했습니다. 해당 내용은 class를 이용해 ```overflow:hidden``` 을 주어 내용을 접었다 펼칠 수 있습니다.
6. **미리보기 글자 크기 변경**<br/>
  책 미리보기 페이지에서 ```input```과 ```button```을 이용해 글자 크기를 변경할 수 있습니다. ```input```을 드래그하거나 양쪽의 버튼을 눌러 조정할 수 있으며, 초기화를 눌러 원래의 상태로 돌아갈 수 있습니다. 글자 크기가 변경되더라도 줄 간격이 적절하게 유지됩니다.

## 후기
이번 프로젝트의 목표는, 아래의 두가지였습니다.
1. 실제 서비스 되고 있는 교보문고 페이지와 디자인을 최대한 동일하게
2. 가능한 많은 기능을 구현해보는 것
   <br/>
eBook 서점인 만큼, 방대한 책 데이터를 정리하기 위해 많은 슬라이드가 존재했고, 이를 위해 swiper를 이용해 비슷한 형태를 만들며 다양한 슬라이드를 구현해 볼 수 있었습니다.

AJAX를 통해 책 DATA를 받아온 다음 동적으로 생성되어야 하는 tag가 많았는데 보안상 innerHTML 사용을 지양하고자 하니, createElement, setAttribute등으로 생성해 코드의 가독성이 좋지 않다는 문제가 있었습니다. 
이 부분을 해결해보고자 후반부에는 jQuery를 이용해보았는데, JS로 작성했을 때보다 코드가 줄어들긴 했으나, 좀 더 좋은 방법은 없었을지 아쉬움이 남습니다.
