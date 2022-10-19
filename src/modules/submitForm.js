import Task from './taskConstruct';
import displayTask from './displayTaskAndModal';
let i = 0;
//Submit task functionality
function submitForm() {
    const submitForm = document.querySelector('.form-container');
    submitForm.addEventListener('submit', (e) => {
        let title = e.target['submit-title'].value;
        let details = e.target['submit-details'].value;
        let date = e.target['submit-date'].value;
        let priority = e.target['submit-priority'].value;
        let index = i;
        let newTask = new Task(title, details, date , priority, index);
        tasks.push(newTask);
        document.querySelector('.bg-modal').style.display = 'none';
        console.log(window.tasks);
        displayTask(title, date, priority);
        e.preventDefault(); // prevent default page refresh
        i++;
    });
}

export default submitForm;
