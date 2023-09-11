//slide 구역 구조
const putSlide = document.querySelector('.slide__put');

for(let i=0; i<19; i++){
  const aTag = document.createElement("a");
  aTag.setAttribute("href", "javascript:void(0)");
  aTag.setAttribute("class", "swiper-slide");
  
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", `./images/slider${i+1}.jpg`);
  imgTag.setAttribute("alt", `.slideImg${i+1}`);
  
  aTag.appendChild(imgTag);
  putSlide.appendChild(aTag);
}



//slide 구역
const progressCircle = document.querySelector(".autoplay-progress #circle-pause");

let slide_mySwiper = new Swiper(".slide_mySwiper", {
  loop:true,
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: false,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
      }
    }
});