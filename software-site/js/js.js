
window.addEventListener('load',function(){
    
            //    navToggeler apper
    if(this.innerWidth <= 768){
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

document.querySelector('.nav-item').addEventListener('click',function(){
    document.querySelector('.all-pages').style.display = 'none';
    navToggeler.classList.toggle('active');
});

 function togglerNav(){
     navToggeler.classList.toggle('active');
     document.querySelector('.all-pages').classList.toggle('open');
     

 }

//  close nav when clicking on anav item 

document.addEventListener('click',function(e){
       if(e.target.closest('.nav-item')){
           togglerNav();
       }
});


// slider image 
class Slider{
    constructor(){
        this.images=[];
         this.images[0]='images/1.png';
         this.images[1]='images/2.png';
         this.images[2]='images/3.png';

         this.paragraph=[];
         this.paragraph[0] ="A great number of satisfied clients who want to come back thorough and thorough.Our projects have the full set of the latest technologies, with eye-catching design.";
         this.paragraph[1] = 'Our projects have the full set of the latest technologies, with eye-catching design. Receive a report and deep analysis at the end of each week.';
         this.paragraph[2] = 'Receive a report and deep analysis at the end of each week.All your projects will be full nesessary features and will diiffer by high perfomance';
     
         this.name = [];
         this.name[0] ='Steve Smith';
         this.name[1] ='Daniel Rogers';
         this.name[2] = 'Emma Cambell';
      
         this.company = [];
         this.company[0] ='CEO,ABC Company';
         this.company[1] ='CEO,ABC Company';
         this.company[2] ='CEO,ABC Company';

           //Counter
           this.counter=0;

           var mySlider = setInterval(() => {
               this.PlaySlider();
           },5000);
        }
          PlaySlider(){
            if(this.counter < this.images.length - 1){
                this.counter++;
            }
            else{
                this.counter = 0;
            }
            document.getElementById('images').src = this.images[this.counter];
            document.getElementById('pargraph').innerHTML =  this.paragraph[this.counter];
            document.getElementById('name').innerHTML = this.name[this.counter];
            document.getElementById('company').innerHTML= this.company[this.counter];

        }
}

onload = new Slider();