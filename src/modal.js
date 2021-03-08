function bindModals(
    btnOpenClass = 'modal-open',
    btnCloseClass = 'close',
    dataTargetAttr = 'target',
    activeClass = 'is-active',
) {
    document.querySelectorAll('.' + btnOpenClass).forEach((openBtn) => {
        const modal = document.querySelector('#' + openBtn.dataset[dataTargetAttr]);
        openBtn.addEventListener('click', () => {
            modal.classList.add(activeClass);
        });

        modal.querySelectorAll('.' + btnCloseClass).forEach((closeBtn) => {
            closeBtn.addEventListener('click', () => modal.classList.remove(activeClass));
        })
    })
}

window.addEventListener('load', () => {
    bindModals();
});
