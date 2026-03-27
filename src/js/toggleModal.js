const updateBodyScrollLock = () => {
  const hasOpenOverlay = document.querySelector('.is-open');
  document.body.classList.toggle('no-scroll', Boolean(hasOpenOverlay));
};

const toggleModal = modal => {
  modal.classList.toggle('is-open');
  updateBodyScrollLock();
};

export const handleWindowOpen = ({
  btnOpenSelector,
  btnCloseSelector,
  backdropSelector,
}) => {
  const openModalBtn = document.querySelector(`[${btnOpenSelector}]`);
  const closeModalBtns = document.querySelectorAll(`[${btnCloseSelector}]`);
  const modal = document.querySelector(`[${backdropSelector}]`);

  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => toggleModal(modal));
  }

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => toggleModal(modal));
  });
};
