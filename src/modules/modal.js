// Add task popup close and open functionality
function modalPopUp() {
    
    const addTaskButton = document.querySelector('.add-task');
    const addTaskPopup = document.querySelector('.bg-modal');
    const addTaskClose = document.querySelector('.close-popup');
    
    addTaskButton.addEventListener('click', ()=>{
        addTaskPopup.style.display = 'flex';
    });
    
    addTaskClose.addEventListener('click', ()=> {
        addTaskPopup.style.display = 'none';
    });

    const keyboardListener = document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape') {
            addTaskPopup.style.display = 'none';
            
        }
    });
};
export default modalPopUp