let i = 0;
function displayTask(title,details, date, priority) {
    let bottom = document.querySelector('.add-task');
    let newTask = document.createElement('div');
    newTask.innerHTML = `
    <div class="item-card">
        <div class="card-left">
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkboxEmpty.svg" alt="" class="checkbox-empty checkbox" data-index=${i}>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkbox.svg" alt="" class="checkbox-tick checkbox" data-index=${i}>
            <div class="card-title" data-index=${i}>${title}</div>
        </div>
        <div class="card-right">
            <div class="priority">Priority: ${priority}</div>
            <div class="dueDate">Due: ${date}</div>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/edit.svg" alt="" class="edit-button" data-index=${i}>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/delete.svg" alt="" class="delete-button" data-index=${i}>
        </div>
    </div>
    `
    newTask.dataset.index = i;
    bottom.insertAdjacentElement('beforebegin', newTask);
    
    let detailBgModal = document.querySelector('.detail-bg-modal');
    let detailModalContent = document.createElement('div');
    detailModalContent.classList.add('detail-modal-content');
    detailModalContent.dataset.index = i;
    detailModalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-title">More information!</div>
        </div>
        <div class="close-popup" data-index=${i}>x</div>
        <div class="extra-content">
            <div class="extra-title">Title: ${title}</div>
            <div class="extra-details">Details: ${details}</div>
            <div class="extra-priority">Priority: ${priority}</div>
            <div class="extra-due-date">Due on ${date}</div>
        </div>`

    detailBgModal.appendChild(detailModalContent);

    i++;
}

export default displayTask;