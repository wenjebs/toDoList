function closeEditPopup() {
    document.addEventListener('click',(e)=>{
        if (e.target.classList.contains('close-edit-popup')) {
            e.target.parentNode.parentNode.parentNode.remove();
        } 
    })
};

export default closeEditPopup