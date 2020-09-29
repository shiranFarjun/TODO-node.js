let addToDoBtn=document.getElementById('addToDo');
let toDoContiner=document.getElementById('toDoContiner');
let input=document.getElementById('input');

addToDoBtn.addEventListener('click', function(){
    let item=document.createElement('p');
    item.classList.add('item-style')
    item.innerText=input.value;
    toDoContiner.appendChild(item);
    input.value=' ';
    item.addEventListener('click',function(){
        item.style.textDecoration="line-through"
        item.removeChild();
    })
})