import './style.css';
import modalPopUp from './modules/modal';
import Task from './modules/task';

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

function displayTask(title, date) {
    let bottom = document.querySelector('.add-task');
    let testy = document.createElement('div');
    testy.innerHTML = `
    <div class="item-card">
        <div class="card-left">
          <button class="check-button"></button>
          <div class="card-title">${title}</div>
        </div>
        <div class="card-right">
            <div class="dueDate">Due: ${date}</div>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/edit.svg" alt="">
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/delete.svg" alt="">
        </div>
    </div>
    `
    bottom.insertAdjacentElement('beforebegin', testy)
}


