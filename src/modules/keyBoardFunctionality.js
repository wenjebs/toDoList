function keyBoardFunction(){
    document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape') {
            if(document.querySelector(`.detail-modal-content[style*="display: block;"]`)){
                const detailModal = document.querySelector(`.detail-modal-content[style*="display: block;"]`);
                const detailModalPopup = document.querySelector('.detail-bg-modal');
                detailModalPopup.style.display = 'none';
                detailModal.style.display ='none';
            } else {
                const addTaskPopup = document.querySelector('.bg-modal');
                addTaskPopup.style.display = 'none';
            }

        }
    })
};

export default keyBoardFunction
