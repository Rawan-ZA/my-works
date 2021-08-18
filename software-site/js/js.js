
window.addEventListener('load',function(){
    
            //    navToggeler apper
    if(this.innerWidth <= 767){
        document.querySelector('.nav-toggler').style.display ='block';
    }
    else{
        document.querySelector('.nav-toggler').style.display ='none';
    }

    // page loader 
    document.querySelector('.page-loader').classList.add('fade-out');
    this.setTimeout(function(){
        document.querySelector('.page-loader').style.display = 'none';

    },600);
    //scroll
    AOS.init();
});

//header sticky
window.addEventListener('scroll',function(){
    if(this.pageYOffset > 60){
        document.querySelector('.header').classList.add('sticky');
    }
    else{
        document.querySelector('.header').classList.remove('sticky');
    }
     
 
});

// -----------------------toggle navbar---------------------

const navToggeler = document.querySelector('.nav-toggler');
navToggeler.addEventListener('click',togglerNav);



 function togglerNav(){
     navToggeler.classList.toggle('active')
     document.querySelector('.all-pages').classList.toggle('open');

 }

//  close nav when clicking on anav item 

document.addEventListener('click',function(e){
       if(e.target.closest('.nav-item')){
           togglerNav();
       }
});