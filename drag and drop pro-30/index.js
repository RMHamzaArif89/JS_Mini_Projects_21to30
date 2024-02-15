lists=document.querySelectorAll('li')
left=document.querySelector('.con-left')
right=document.querySelector('.con-right')


for(list of lists){
    list.addEventListener('dragstart',function(e){
        selected=e.target;
    })
    right.addEventListener('dragover',function(e){
        e.preventDefault();
    })
    right.addEventListener('drop',function(e){
        right.appendChild(selected);
        selected=null;
    })




    left.addEventListener('dragover',function(e){
        e.preventDefault();
    })
    left.addEventListener('drop',function(e){
        left.appendChild(selected);
        selected=null;
    })
}