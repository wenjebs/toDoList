import Project from './Project';
import Task from './Task';
let projects = [];
class UI {
// EVENTLISTENERS FOR EACH PROJECT
    static initProjectButtons() {
        const projectButtons = document.querySelectorAll('.project-button');
        projectButtons.forEach((projectButton)=>{
            projectButton.addEventListener('click', UI.handleProjectButton)
        })
    }
    static handleProjectButton(e) {
        const projectTitle = e.target.textContent;
        const projectButtons = document.querySelectorAll('.project-button');
        projectButtons.forEach((projectButton)=>{
            projectButton.classList.remove('active')
        })
        e.target.classList.add('active')
        console.log(e.target)
        UI.openProject(projectTitle)
    }

    static openProject(projectTitle, projectButton) {
        // select all buttons and set to non active
        // close all project popups
        // LOAD Project content
        UI.loadProjectContent(projectTitle)
    }

    static loadProjectContent(projectTitle) {
        const toDoItemsContainer = document.querySelector('.todoitems-container');
        toDoItemsContainer.innerHTML = `
        <div class="items-container">
            <div class="current-project-header">${projectTitle}</div>
            <div class="task-list"></div>
            <div class="add-task">
                <div class="add-task-left">
                  <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/add.svg" alt=""  class="add-task-button">
                  <div class="add-task-title">Add task</div>
                </div>
            </div>
        </div>`
        UI.loadTasks(projectTitle);
    }
    static loadTasks(projectTitle){
        const projectToBeLoaded = projects.find((project)=>project.getTitle() === projectTitle);
        projectToBeLoaded.getTasks().forEach((task)=>{
            UI.displayTask(task.title, task.date, task.priority)
        })
        UI.initAddTaskButtons(projectTitle);
    }
// display any present tasks
    static displayTask(title, date, priority) {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML += `
        <div class="item-card">
            <div class="card-left">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkboxEmpty.svg" alt="" class="checkbox-empty checkbox">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkbox.svg" alt="" class="checkbox-tick checkbox">
                <div class="card-title ${title}">${title}</div>
            </div>
            <div class="card-right">
                <div class="priority">${priority}</div>
                <div class="dueDate">${date}</div>
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/edit.svg" alt="" class="edit-button">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/delete.svg" alt="" class="delete-button">
            </div>
        </div>`
        UI.initTaskButtons()
    }
// eventlistener for the buttons within each task
    static initTaskButtons() {
        const cardLefts = document.querySelectorAll('.card-left');
        cardLefts.forEach((cardLeft)=> {
            cardLeft.addEventListener('click', UI.handleTickButton);
        })
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach((deleteButton)=> {
            deleteButton.addEventListener('click', UI.handleDeleteButton);
        })
    }
    static handleTickButton(e) {
        if (e.target.classList.contains('checkbox-empty')) {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
            e.target.nextElementSibling.nextElementSibling.style.textDecoration = 'line-through';
            let parent = e.target.parentElement.parentElement;
            parent.style.opacity = '0.3';
        }
        if (e.target.classList.contains('checkbox-tick')) {
            e.target.style.display = 'none';
            e.target.previousElementSibling.style.display = 'block';
            e.target.nextElementSibling.style.textDecoration = 'none';
            let parent = e.target.parentElement.parentElement;
            parent.style.opacity = '1';
        }
    }
    static handleDeleteButton(e) {
        const taskTitle = e.target.parentElement.previousElementSibling.querySelector('.card-title').textContent
        const projectTitle = document.querySelector('.current-project-header').textContent
        const currentProject = projects.find((project)=>{
            return project.getTitle() === projectTitle
        });
        currentProject.deleteTask(taskTitle);
        UI.clearTasks()
        UI.loadProjectContent(projectTitle);
    }
// EVENTLISTENER FOR ADD TASK BUTTON IN EACH PROJ
    static initAddTaskButtons() {
        const addTaskButton = document.querySelector('.add-task');
        const addTaskPopup = document.querySelector('.bg-modal');
        const addTaskForm = document.querySelector('.form-container');
        addTaskButton.addEventListener('click', ()=>{
            addTaskPopup.style.display = 'flex'
        });
        addTaskForm.addEventListener('submit', UI.handleInput)
    }   
    static handleInput(e) {
        e.preventDefault();
        const projectTitle = document.querySelector('.project-button.active').textContent
        const currentProject = projects.filter((project) => project.getTitle() === projectTitle)[0];
        const addTaskPopup = document.querySelector('.bg-modal');
        let title = e.target['submit-title'].value;
        let details = e.target['submit-details'].value;
        let date = e.target['submit-date'].value;
        let priority = e.target['submit-priority'].value;
        if (currentProject.contains(title)) {
            alert('NO SAME TASK TITLE');
            addTaskPopup.style.display = 'none';
            return
        }
        currentProject.addTask(new Task(title, details, date, priority))
        addTaskPopup.style.display = 'none';
        UI.displayTask(title, date, priority);
    }
// EVENTLISTENER FOR ADD PROJECT BUTTON
    static initAddProjectButtons() {
        const addProjectButton = document.querySelector('.add-project-button');
        const submitProjectPopupInput = document.querySelector('#submit-project-title');
        addProjectButton.addEventListener('click', UI.openAddProjectPopup)
        submitProjectPopupInput.addEventListener('click', UI.addProject)
    }

    static openAddProjectPopup() {
        const addProjectPopup = document.querySelector('.input-project-formcontainer');
        if (addProjectPopup.style.display === 'block') {
            addProjectPopup.style.display = 'none';
        } else {
            addProjectPopup.style.display = 'block';
        }
    }

    static addProject() {
        const inputProjectTitle = document.getElementById('input-project-title')
        const projectTitle = inputProjectTitle.value
        if (projectTitle==='') {
            alert('Project title cant be empty');
            return
        }
        let titles = projects.map(project => {return project.getTitle()})
        if (titles.includes(projectTitle)) {
            alert('Cant have same name')
            return
        }
        UI.createProjectTitleDOM(projectTitle);
        projects.push(new Project(projectTitle));
        console.log(projects);
    }

    static createProjectTitleDOM(projectTitle) {
        const projectTitlesContainer = document.querySelector('.projects-container');
        projectTitlesContainer.innerHTML += `<div id="${projectTitle}" class="project-button">${projectTitle}</div>`
        UI.initProjectButtons()
    }

    static clearTasks() {
        let tasksContainer = document.querySelector('.todoitems-container')
        tasksContainer.innerHTML = '';
    }
}

export default UI