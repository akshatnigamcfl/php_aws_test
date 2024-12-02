const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    if (heading.classList.value.includes('red')){
        heading.classList.remove('red');
        heading.classList.add('black');
    } else {
        heading.classList.remove('black');
        heading.classList.add('red');
    }

})