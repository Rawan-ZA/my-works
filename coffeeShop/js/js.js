
//  navbar menu

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let list_item = document.querySelector('.list-item');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});
list_item.addEventListener('click', () => {
    list_item.classList.toggle('active');
});
window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

});
class Slider{
  constructor(){
     //images
      this.slider = [];
      this.slider[0]="images/break-amico.png";
      this.slider[1]="images/break-rafiki.png";
      this.slider[2]="images/break-pana.png";
      this.slider[3]="images/coffee.jpg";
      //counter
      this.counter = 0;
      var intervale = setInterval(() => {
        this.playSlider();
    }, 3000);    
        
    }
  playSlider() {

    if(  this.counter <   this.slider.length - 1){
      this.counter++;
     }
     else{
      this.counter=0;
     }
     document.imges_slider.src =   this.slider[ this.counter];

  }
}
onload = new Slider();


    // window.addEventListener('load',setInterval);
    // start slider images
    
    // document.querySelectorAll('.images-slider img').forEach(images => {
    //     images.addEventListener('click', ()=>{
    //         var src = images.getAttribute('src');
    //     document.querySelector('.main-home-img').src = src;
    //     });
    // });
// swiper section 
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 2,
        },
      },
      loop:true,
      grabCursor:true
  });
  // aos function 
  AOS.init();

