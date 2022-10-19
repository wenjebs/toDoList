
function deleteButton(){
    document.addEventListener('click', (e)=>{
        if(e.target.classList.contains('delete-button')){
            let index = e.target.dataset.index
            let toBeDeletedParent = document.querySelector(`[data-index='${index}']`);
            toBeDeletedParent.remove();
            // delete task from array
            let i = tasks.findIndex((task)=>task.index === parseInt(index))
            tasks.splice(i, 1)
            console.log(i, tasks)
        }
    });
};

export default deleteButton;