const searchToggler = document.querySelector('.search-toggle');

searchToggler.addEventListener('click', toggleAction);

function toggleAction() {
    if (!searchToggler.classList.contains('on')) searchToggler.classList.toggle('on');
    searchToggler.removeEventListener('click', toggleAction);
}

const navObject = [

];