let i = 0;
function displayTask(title, date) {
    let bottom = document.querySelector('.add-task');
    let newTask = document.createElement('div');
    newTask.innerHTML = `
    <div class="item-card">
        <div class="card-left">
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkboxEmpty.svg" alt="" class="checkbox-empty checkbox">
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkbox.svg" alt="" class="checkbox-tick checkbox">
            <div class="card-title">${title}</div>
        </div>
        <div class="card-right">
            <div class="dueDate">Due: ${date}</div>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/edit.svg" alt="" class="edit-button" data-index=${i}>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/delete.svg" alt="" class="delete-button" data-index=${i}>
        </div>
    </div>
    `
    newTask.dataset.index = i;
    bottom.insertAdjacentElement('beforebegin', newTask);
    i++;
}

export default displayTask;