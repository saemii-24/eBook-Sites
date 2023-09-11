const videoList = [
    '이야기 동물사',
    '김난도의 <잇트렌드> 프리미엄 클래스',
    '비하인드 클래식 시즌 4',
    '시네마 철학관',
    '6분 클래식 스페셜 6',
    '직장인의 무기가 되는 챗GPT 활용',
];
const putVideo = document.querySelector('.video__put');


for (i = 0; i <videoList.length; i++) {
    const videoBox = document.createElement("div");
    videoBox.setAttribute("class", "video__box");

    //1번 묶음
    const thumbnail = document.createElement("a");
    thumbnail.setAttribute("class", "video__thumbnail");
    thumbnail.setAttribute("href", "javascript:void(0)");

    const img = document.createElement("img");
    img.setAttribute("src", `./images/video${i+1}.webp`);
    img.setAttribute("alt", `${videoList[i]} 썸네일`);

    //2번 묶음
    const videoTitle = document.createElement("a");
    videoTitle.setAttribute("class", "video__title");
    videoTitle.setAttribute("href", "javascript:void(0)");
    videoTitle.textContent = videoList[i];

    //3번 묶음
    const videoPlay = document.createElement("a");
    videoPlay.setAttribute("class", "video__play");
    videoPlay.setAttribute("href", "javascript:void(0)");

    //묶음을 정리한다.
    thumbnail.append(img);
    videoBox.append(thumbnail, videoTitle, videoPlay);
    putVideo.append(videoBox);
}

