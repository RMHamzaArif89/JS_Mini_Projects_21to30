function tog(){
    navBar=document.querySelector('.nav-bar')
    navR=document.querySelector('.nav-right')

    navBar.classList.toggle('tog-add');


    navR.classList.toggle('nav-r');
   
   
}
document.addEventListener('scroll',function(){
    navBar=document.querySelector('.nav-bar')
    navBar.classList.add('nav-add')
    if(window.scrollY==0){
     navBar.classList.remove('nav-add')

    }
    
    scrollheight=scrollY;
    if(scrollheight>300){
        document.querySelector('.top-link').classList.add('top-link-add')
    }
    if(scrollheight<300){
        document.querySelector('.top-link').classList.remove('top-link-add')

    }
  
    
    
})
