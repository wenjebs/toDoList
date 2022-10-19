function openDetailModal() {
    document.addEventListener('click',(e)=>{
        if (e.target.classList.contains('card-title')) {
            let index = e.target.dataset.index
            let detailBgModal = document.querySelector('.detail-bg-modal');
            let detailModal = document.querySelector(`.detail-modal-content[data-index='${index}']`);
            detailBgModal.style.display = 'flex';
            detailModal.style.display = 'block';
        }
    });
};

export default openDetailModal;