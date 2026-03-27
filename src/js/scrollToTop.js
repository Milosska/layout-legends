export const handleScrollToTop = () => {
  const scrollTopBtn = document.querySelector('.js-scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('is-shown');
    } else {
      scrollTopBtn.classList.remove('is-shown');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};
