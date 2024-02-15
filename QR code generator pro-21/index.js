img=document.querySelector('img')
btn=document.querySelector('.con-btn')
inp=document.querySelector('.input');
inpValue=inp.value;


btn.addEventListener('click',function(){
    img.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`

})