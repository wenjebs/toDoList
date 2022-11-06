import Project from './Project'
import Task from './Task'
import ToDoList from './ToDoList'
import { isToday, parseISO } from 'date-fns'

const Projects = new ToDoList()
localStorage.setItem('todolist', JSON.stringify(Projects))
class UI {
  // EVENTLISTENER FOR TODAY BUTTON
  static initTodayButton () {
    const todayButton = document.querySelector('.today')
    todayButton.addEventListener('click', UI.handleTodayButton)
  }

  static handleTodayButton () {
    const toDoItemsContainer = document.querySelector('.todoitems-container')
    toDoItemsContainer.innerHTML = `
        <div class="items-container">
            <div class="current-project-header">Today</div>
            <div class="task-list"></div>
            </div>
        </div>`
    UI.loadTodaysTasks()
  }

  static loadTodaysTasks () {
    Projects.getProjects().forEach((project) => {
      project.getTasks().forEach((task) => {
        const check = isToday(parseISO(task.date))
        if (check) {
          UI.displayTask(task.title, task.date, task.priority)
        }
      })
    })
  }

  // EVENTLISTENER FOR ADD PROJECT BUTTON
  static initAddProjectButtons () {
    const addProjectButton = document.querySelector('.add-project-button')
    const submitProjectPopupInput = document.querySelector(
      '#submit-project-title'
    )
    addProjectButton.addEventListener('click', UI.openAddProjectPopup)
    submitProjectPopupInput.addEventListener('click', UI.addProject)
  }

  static openAddProjectPopup () {
    const addProjectPopup = document.querySelector(
      '.input-project-formcontainer'
    )
    if (addProjectPopup.style.display === 'block') {
      addProjectPopup.style.display = 'none'
    } else {
      addProjectPopup.style.display = 'block'
    }
  }

  static addProject () {
    const addProjectPopup = document.querySelector(
      '.input-project-formcontainer'
    )
    const inputProjectTitle = document.getElementById('input-project-title')
    const projectTitle = inputProjectTitle.value
    if (projectTitle === '') {
      alert('Project title cant be empty')
      return
    }
    const titles = Projects.getProjects().map((project) => {
      return project.getTitle()
    })
    if (titles.includes(projectTitle)) {
      alert('Cant have same name')
      return
    }
    UI.createProjectTitleDOM(projectTitle)
    Projects.addProject(new Project(projectTitle))
    addProjectPopup.style.display = 'none'
    addProjectPopup.querySelector('input').value = ''
  }

  static createProjectTitleDOM (projectTitle) {
    const projectTitlesContainer = document.querySelector(
      '.projects-container'
    )
    projectTitlesContainer.innerHTML += `<div id="${projectTitle}" class="project-button">${projectTitle}</div>`
    UI.initProjectButtons()
  }

  // EVENTLISTENERS FOR EACH PROJECT
  static initProjectButtons () {
    const projectButtons = document.querySelectorAll('.project-button')
    projectButtons.forEach((projectButton) => {
      projectButton.addEventListener('click', UI.handleProjectButton)
    })
  }

  static handleProjectButton (e) {
    const projectTitle = e.target.textContent
    const projectButtons = document.querySelectorAll('.project-button')
    projectButtons.forEach((projectButton) => {
      projectButton.classList.remove('active')
    })
    e.target.classList.add('active')
    console.log(e.target)
    UI.openProject(projectTitle)
  }

  static openProject (projectTitle, projectButton) {
    UI.loadProjectContent(projectTitle)
  }

  static loadProjectContent (projectTitle) {
    const toDoItemsContainer = document.querySelector('.todoitems-container')
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
    UI.loadTasks(projectTitle)
  }

  static loadTasks (projectTitle) {
    const projectToBeLoaded = Projects.getProject(projectTitle)
    projectToBeLoaded.getTasks().forEach((task) => {
      UI.displayTask(task.title, task.date, task.priority)
    })
    UI.initAddTaskButtons(projectTitle)
  }

  static displayTask (title, date, priority) {
    const taskList = document.querySelector('.task-list')
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
  static initTaskButtons () {
    const cardLefts = document.querySelectorAll('.card-left')
    cardLefts.forEach((cardLeft) => {
      cardLeft.addEventListener('click', UI.handleTickButton)
    })
    const deleteButtons = document.querySelectorAll('.delete-button')
    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener('click', UI.handleDeleteButton)
    })

    const cardTitles = document.querySelectorAll('.card-title')
    cardTitles.forEach((cardTitle) => {
      cardTitle.addEventListener('click', UI.handleTitleButton)
    })

    const editButtons = document.querySelectorAll('.edit-button')
    editButtons.forEach((editButton) => {
      editButton.addEventListener('click', UI.handleEditButton)
    })
  }

  static handleTickButton (e) {
    if (e.target.classList.contains('checkbox-empty')) {
      e.target.style.display = 'none'
      e.target.nextElementSibling.style.display = 'block'
      e.target.nextElementSibling.nextElementSibling.style.textDecoration =
        'line-through'
      const parent = e.target.parentElement.parentElement
      parent.style.opacity = '0.3'
    }
    if (e.target.classList.contains('checkbox-tick')) {
      e.target.style.display = 'none'
      e.target.previousElementSibling.style.display = 'block'
      e.target.nextElementSibling.style.textDecoration = 'none'
      const parent = e.target.parentElement.parentElement
      parent.style.opacity = '1'
    }
  }

  static handleDeleteButton (e) {
    const taskTitle =
      e.target.parentElement.previousElementSibling.querySelector(
        '.card-title'
      ).textContent
    const projectTitle = document.querySelector(
      '.current-project-header'
    ).textContent
    const currentProject = Projects.getProject(projectTitle)
    currentProject.deleteTask(taskTitle)
    UI.clearTasks()
    UI.loadProjectContent(projectTitle)
  }

  static handleTitleButton (e) {
    const taskTitle = e.target.classList[1]
    const projectTitle = document.querySelector(
      '.current-project-header'
    ).textContent
    const currentProject = Projects.getProject(projectTitle)
    const currentTask = currentProject.getTask(taskTitle)
    UI.showDetails(
      currentTask.title,
      currentTask.details,
      currentTask.date,
      currentTask.priority
    )
  }

  static showDetails (title, details, date, priority) {
    const detailPopupModal = document.querySelector('.detail-bg-modal')
    detailPopupModal.innerHTML = `
        <div class='detail-modal-content'>
            <div class="modal-header">
                <div class="modal-title">More information!</div>
            </div>
            <div class="close-detail-popup">x</div>
            <div class="extra-content">
                <div class="extra-title">Title: ${title}</div>
                <div class="extra-details">Details: ${details}</div>
                <div class="extra-priority">Priority: ${priority}</div>
                <div class="extra-due-date">Due on ${date}</div>
            </div>
        </div>
        `
    detailPopupModal.style.display = 'flex'
    UI.initCloseDetailPopupButton(detailPopupModal)
  }

  static initCloseDetailPopupButton (detailPopupModal) {
    const closeButton = document.querySelector('.close-detail-popup')
    closeButton.addEventListener('click', () => {
      detailPopupModal.style.display = 'none'
      detailPopupModal.innerHTML = ''
    })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        detailPopupModal.style.display = 'none'
        detailPopupModal.innerHTML = ''
      }
    })
  }

  static handleEditButton (e) {
    const itemCard = e.target.parentElement.parentElement
    if (e.target.parentElement.parentElement.nextElementSibling) {
      e.target.parentElement.parentElement.nextElementSibling.remove()
    } else {
      const editDetails = document.createElement('div')
      editDetails.classList.add('edit-card')
      editDetails.innerHTML = `
                <div class="edit-card-content">
                    <div class="edit-card-header">
                        <div class="edit-title">Edit details</div>
                        <div class="close-edit-popup">x</div>
                    </div>
                    <form action="" class="edit-form-container">
                        <input type="text" id="edit-title" name="edit-title" placeholder="if have then put" value='dynamic' required>
                        <input type="textarea" id="edit-details" name="edit-details" placeholder="if have then put" value='dynamic'>
                        <input type="date" id="edit-date" name="edit-date" value='dynamic'>
                        <div class="priority-radio">
                            <div class="priority-header">Priority: </div>
                            <div class="low-priority radio-wrapper">
                                <input type="radio" id="low-priority" name="edit-priority" value="low" checked>
                                <label for="low-priority">LOW</label>
                            </div>
                            <div class="medium-priority radio-wrapper">
                                <input type="radio" id="medium-priority" name="edit-priority" value="medium">
                                <label for="medium-priority">MEDIUM</label>
                            </div>
                            <div class="high-priority radio-wrapper">
                                <input type="radio" id="high-priority" name="edit-priority" value="high">
                                <label for="high-priority">HIGH</label>
                            </div>
                        </div>
                        <input type="submit" id='submit-task' value="ADD TO DO">
                    </form> 
                </div>
            `
      itemCard.insertAdjacentElement('afterend', editDetails)
      UI.initEditFormLogic(e)
    }
  }

  static initEditFormLogic (e) {
    const closePopup = document.querySelector('.close-edit-popup')
    const editContainer = document.querySelector('.edit-card')
    closePopup.addEventListener('click', () => {
      editContainer.remove()
    })

    const editForm = document.querySelector('.edit-form-container')
    editForm.addEventListener('submit', UI.handleEditTaskInput)
  }

  static handleEditTaskInput (e) {
    e.preventDefault()
    const taskTitle =
      e.target.parentNode.parentNode.previousElementSibling.querySelector(
        '.card-title'
      ).textContent
    const projectTitle = document.querySelector(
      '.project-button.active'
    ).textContent
    const currentProject = Projects.getProject(projectTitle)
    const currentTask = currentProject.getTask(taskTitle)
    const title = e.target['edit-title'].value
    const details = e.target['edit-details'].value
    const date = e.target['edit-date'].value
    const priority = e.target['edit-priority'].value
    UI.editTask(e, currentTask, title, details, date, priority)
  }

  static editTask (e, currentTask, title, details, date, priority) {
    currentTask.title = title
    currentTask.details = details
    currentTask.date = date
    currentTask.priority = priority
    UI.displayEditedTask(e, title, date, priority)
  }

  static displayEditedTask (e, title, date, priority) {
    const taskToBeEdited =
      e.target.parentNode.parentNode.previousElementSibling
    taskToBeEdited.innerHTML = `
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
        </div>`
    e.target.parentNode.parentNode.remove()
    UI.initTaskButtons()
  }

  // EVENTLISTENER FOR ADD TASK BUTTON IN EACH PROJ
  static initAddTaskButtons () {
    const addTaskButton = document.querySelector('.add-task')
    const addTaskPopup = document.querySelector('.bg-modal')
    const addTaskForm = document.querySelector('.form-container')
    const closeTaskPopup = document.querySelector('.close-popup')
    addTaskButton.addEventListener('click', () => {
      addTaskPopup.style.display = 'flex'
    })
    closeTaskPopup.addEventListener('click', () => {
      addTaskPopup.style.display = 'none'
    })
    addTaskPopup.addEventListener('keydown', UI.closeTaskPopupWithKeyboard)
    addTaskForm.addEventListener('submit', UI.handleInput)
  }

  static handleInput (e) {
    e.preventDefault()
    const projectTitle = document.querySelector(
      '.project-button.active'
    ).textContent
    const currentProject = Projects.getProject(projectTitle)
    const addTaskPopup = document.querySelector('.bg-modal')
    const title = e.target['submit-title'].value
    const details = e.target['submit-details'].value
    const date = e.target['submit-date'].value
    const priority = e.target['submit-priority'].value
    if (currentProject.contains(title)) {
      alert('NO SAME TASK TITLE')
      addTaskPopup.style.display = 'none'
      return
    }
    currentProject.addTask(new Task(title, details, date, priority))
    addTaskPopup.style.display = 'none'
    UI.displayTask(title, date, priority)
  }

  static closeTaskPopupWithKeyboard (e) {
    const addTaskPopup = document.querySelector('.bg-modal')
    if (e.key === 'Escape') {
      addTaskPopup.style.display = 'none'
    }
  }

  static clearTasks () {
    const tasksContainer = document.querySelector('.todoitems-container')
    tasksContainer.innerHTML = ''
  }
}

export default UI
