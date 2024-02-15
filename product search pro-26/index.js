
search = () => {
    product=document.querySelectorAll('.con-product')
proName=document.getElementsByTagName('h1')
con=document.querySelector('.con-sbox')
inpValue=document.querySelector('input').value.toLocaleUpperCase();




for(var i=0; i<proName.length; i++){
let match = product[i].getElementsByTagName('h1')[0];


if(match){
let textValue = match.innerHTML

if(textValue.toUpperCase().indexOf(inpValue) > -1){
    product[i].style.display=''
}else{
    product[i].style.display='none'
}
}
}
}