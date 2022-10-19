import './style.css';
import modalPopUp from './modules/modal';
import Task from './modules/task';
import displayTask from './modules/displayTask';
import checkboxVisual from './modules/checkboxVisual';
import deleteButton from './modules/deleteButton';

window.tasks = [];
let i = 0;
// add task popup logic
modalPopUp();

//Submit task functionality
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
    displayTask(title, date);
    e.preventDefault(); // prevent default page refresh
    i++;
});

// checkbox ticking visual functionality
checkboxVisual();
// delete button functionality
deleteButton();

