note = document.querySelectorAll('.note')
btnCreat = document.querySelector('.btnCreat')
con=document.querySelector('.container')
noteCon=document.querySelector('.note-con')


function shownote(){
    noteCon.innerHTML= localStorage.getItem('note');
    console.log('note')
   
}
shownote();

function updateStroage(){
    
    localStorage.setItem('note',noteCon.innerHTML)
}






btnCreat.addEventListener('click', function func(){
    note= document.createElement('div');
    note.classList.add('note')
    textArea=document.createElement('textarea')
    i=document.createElement('i')
    i.classList.add('delete')
    i.classList.add('bi')
    i.classList.add('bi-trash3-fill')


    noteCon.appendChild(note).appendChild(textArea)
    note.appendChild(i)


})
del = document.querySelector('.delete')
noteCon.addEventListener('click',function func2(e){

    if(e.target.classList.contains('delete')){
        console.log('del')
        e.target.parentElement.remove();
        updateStroage();

    }
    
})

