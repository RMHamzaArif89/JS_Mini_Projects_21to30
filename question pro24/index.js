
conAns=document.querySelectorAll('.con-ans');
conQ=document.querySelectorAll('.con-question');
spanBtns=document.querySelectorAll('span')




conQ.forEach((item) =>{
    btn=item.querySelector('span')
    


btn.addEventListener('click',function(){
    answer=item.childNodes[3]

 
    answer.classList.toggle('ans-show')
    if(answer.classList.contains('ans-show')){
        this.innerText='-'
    }else{
        this.innerText='+'
    }
   
   
    
    
  



  
})

})
//if(answer.classList.contains('ans-show')){
   // btn.innerText='-'
//}else{
//btn.innerText='+'
//}

