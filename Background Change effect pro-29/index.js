conImg=document.querySelector('.con-img')
imgWrap=document.querySelector('.img-wrap')
orImg=document.querySelector('.wrapImg')
orImg.style.width=conImg.offsetWidth +'px';


leftSpace= conImg.offsetLeft;

conImg.onmousemove = function(e){

    boxWidth = (e.pageX - leftSpace)+'px';
    imgWrap.style.width=boxWidth;

}