//   add background for header 
window.addEventListener('scroll',function(){
    if(this.pageYOffset > 60){
        document.querySelector('.header').classList.add('sticky');
    }
    else{
        document.querySelector('.header').classList.remove('sticky');
    }
     
 
});
// add magfic library 
$('.facilities-section').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
        enabled:true,
    }
});

// start counter section 
$(document).ready(function(){
    $('.counter').counterUp({
       delay: 10,
       time: 1000
    });
      });

    // add aos library
    window.addEventListener('load', ()=>{
        AOS.init();
    }) ;

    // make responsive menu 
    // $(document).ready(function(){
    //  $('.fa-bars').click(function(){
    // $(this).toggleClass('.fa-times');
    // $('.nav').toggleClass('.nav-toggle');
    //  });
    // });

    var menu = document.querySelector('.fa-bars');
    var nav = document.querySelector('.nav')
    menu.addEventListener('click',function(){
          menu.classList.toggle('fa-times');
          nav.classList.toggle('nav-toggle');
    });
window.addEventListener('scroll',()=>{
        menu.classList.remove('fa-times');
        nav.classList.remove('nav-toggle');
    });
