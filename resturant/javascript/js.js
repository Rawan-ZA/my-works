 
 window.addEventListener('load',function(){

    // page loader 
    document.querySelector('.page-loader').classList.add('fade-out');
    this.setTimeout(function(){
        document.querySelector('.page-loader').style.display = 'none';

    },600)

     //animation on scroll
    AOS.init();

 });


// -----------------------toggle navbar---------------------

const navToggeler = document.querySelector('.nav-toggler');
navToggeler.addEventListener('click',togglerNav);


 function togglerNav(){
     navToggeler.classList.toggle('active')
     document.querySelector('.nav').classList.toggle('open');
 }

//  close nav when clicking on anav item 

document.addEventListener('click',function(e){
       if(e.target.closest('.nav-item')){
           togglerNav();
       }
});

// -----------------------header sticky-----------------
window.addEventListener('scroll',function(){
    if(this.pageYOffset > 60){
        document.querySelector('.header').classList.add('sticky');
    }
    else{
        document.querySelector('.header').classList.remove('sticky');
    }

});

// -------------------------------menu tab ----------------------------

const menuTab = document.querySelector('.menu-tabs');
menuTab.addEventListener('click',function(e){
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){
        const target = e.target.getAttribute('data-target');
        menuTab.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
       const menuSection = document.querySelector('.menu-section');
        menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
        menuSection.querySelector(target).classList.add('active');
          //animation on scroll
    AOS.init();

    }

});