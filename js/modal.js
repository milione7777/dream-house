const callElem = document.getElementById('call');
const backdrop = document.querySelector('.backdrop');

callElem.addEventListener('click', openModal());

function openModal() {
    backdrop.classList.add = ".backdrop-open";
}
