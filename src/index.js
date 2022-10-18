import './style.css';

// Add task popup close and open functionality
const addTaskButton = document.querySelector('.add-task');
const addTaskPopup = document.querySelector('.bg-modal');
const addTaskClose = document.querySelector('.close-popup');

addTaskButton.addEventListener('click', ()=>{
    addTaskPopup.style.display = 'flex';
});

addTaskClose.addEventListener('click', ()=> {
    addTaskPopup.style.display = 'none';
});