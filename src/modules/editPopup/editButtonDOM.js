function editButtonDom() {
    document.addEventListener('click', (e)=>{
        if(e.target.classList.contains('edit-button')) {
            if (e.target.parentNode.parentNode.nextElementSibling){
                e.target.parentNode.parentNode.nextElementSibling.remove();
            }else{
                let editDetails = document.createElement('div');
                editDetails.classList.add("edit-card");
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
                let addBelowThis = e.target.parentNode.parentNode;
                addBelowThis.insertAdjacentElement('afterend', editDetails);
            }
        }
    });
}

export default editButtonDom