import './style.css';
import modalPopUp from './modules/modal';
import Task from './modules/task';
import displayTask from './modules/displayTask';
import checkboxVisual from './modules/checkboxVisual';

let tasks = [];

// add task popup logic
modalPopUp();

//Submit task functionality
const submitForm = document.querySelector('.form-container');
submitForm.addEventListener('submit', (e) => {
    let title = e.target['submit-title'].value;
    let details = e.target['submit-details'].value;
    let date = e.target['submit-date'].value;
    let priority = e.target['submit-priority'].value;
    let newTask = new Task(title, details, date , priority);
    tasks.push(newTask);
    document.querySelector('.bg-modal').style.display = 'none';
    console.log(tasks);
    displayTask(title, date);
    e.preventDefault(); // prevent default page refresh
});

// checkbox ticking visual functionality
checkboxVisual();


