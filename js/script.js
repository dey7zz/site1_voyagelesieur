const btPlus = document.querySelector('.js-plus');
const containerT = document.querySelector(".container-transport")

btPlus.addEventListener('click', fouvreferme);

function fouvreferme() {
    containerT.classList.toggle('container-transport-invisible');
}