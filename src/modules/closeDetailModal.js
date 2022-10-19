function closeDetailModal() {
        const detailModalPopup = document.querySelector('.detail-bg-modal');

        document.addEventListener('click',(e)=>{
            if (e.target.classList.contains('close-popup')) {
                let index = e.target.dataset.index
                const detailModal = document.querySelector(`.detail-modal-content[data-index='${index}']`);
                detailModalPopup.style.display ='none';
                detailModal.style.display ='none';
            } 
        })
        document.addEventListener('keydown', (e)=>{
            if (e.key === 'Escape') {
                const detailModal = document.querySelector(`.detail-modal-content[style*="display: block;"]`);
                detailModalPopup.style.display = 'none';
                detailModal.style.display ='none';
            }
        })
}

export default closeDetailModal;