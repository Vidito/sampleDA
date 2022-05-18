let icon = document.querySelector('.icon');
let navMobile = document.querySelector('.mob');
let x = document.querySelector('.x');

const open = ()=>{
    navMobile.classList.add('show');
}
icon.addEventListener('click', open)

const close = ()=>{
    navMobile.classList.remove('show');
}
x.addEventListener('click', close)

