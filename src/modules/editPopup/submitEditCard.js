import editTask from './editTask';

function submitEditCard() {
    document.addEventListener('submit', (e)=>{
        if(e.target.className==='form-container'){
            e.preventDefault();
        } else if(e.target.className==='edit-form-container'){
            let form = e.target;
            let title = form['edit-title'].value;
            let details = form['edit-details'].value;
            let date = form['edit-date'].value;
            let priority = form['edit-priority'].value;
            console.log(title, details, date, priority)
            e.preventDefault();
            editTask(title,details,date,priority, e);
        };
    })
}

export default submitEditCard;