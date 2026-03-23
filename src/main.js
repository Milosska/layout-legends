const updateBodyScrollLock = () => {
  const hasOpenOverlay = document.querySelector('.is-open');
  document.body.classList.toggle('no-scroll', Boolean(hasOpenOverlay));
};

const toggleModal = modal => {
  modal.classList.toggle('is-open');
  updateBodyScrollLock();
};

const handleWindowOpen = ({
  btnOpenSelector,
  btnCloseSelector,
  backdropSelector,
}) => {
  const openModalBtn = document.querySelector(`[${btnOpenSelector}]`);
  const closeModalBtn = document.querySelector(`[${btnCloseSelector}]`);
  const modal = document.querySelector(`[${backdropSelector}]`);

  openModalBtn.addEventListener('click', () => toggleModal(modal));
  closeModalBtn.addEventListener('click', () => toggleModal(modal));
};

handleWindowOpen({
  btnOpenSelector: 'data-menu-open', // data attribute for the menu open button
  btnCloseSelector: 'data-menu-close', // data attribute for the menu close button
  backdropSelector: 'data-menu', // data attribute for the menu backdrop
});
