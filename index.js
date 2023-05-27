const button = document.getElementById('click-me');

const body = document.getElementById('body');


button.addEventListener('click', cambiarColor);

function cambiarColor () {

    body.classList.toggle("selector");
}