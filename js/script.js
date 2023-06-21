const h1 = document.querySelector('h1');
h1.addEventListener('click', function(){
    alert('Hello!')
})

const h3 = document.querySelector('.h3');
const list = document.querySelector('.list');

h3.addEventListener("click", function(){
    list.style.backgroundColor = 'red';
    list.style.color = 'white';
})

list.addEventListener("click", function(){
    list.style.backgroundColor = 'white';
    list.style.color = 'black';
})