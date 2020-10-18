let getAway = document.querySelector('a.close');
let modal = document.querySelector('.overlay');
let modalOut = document.querySelector('a.overlay_cancel');

getAway.addEventListener('click', ev => {
    ev.preventDefault();
    modal.classList.add('over');
});

modalOut.addEventListener('click', ev => {
    ev.preventDefault();
    modal.classList.remove('over');
});