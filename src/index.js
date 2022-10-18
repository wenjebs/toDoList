import './style.css';

const addTaskButton = document.querySelector('.add-task');
const addTaskPopup = document.querySelector('.bg-modal');
const addTaskClose = document.querySelector('.close-popup');

addTaskButton.addEventListener('click', ()=>{
    addTaskPopup.style.display = 'flex';
});

addTaskClose.addEventListener('click', ()=> {
    addTaskPopup.style.display = 'none';
});