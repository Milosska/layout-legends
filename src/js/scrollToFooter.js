export const handleScrollToFooter = () => {
  const scrollFooterLink = document.querySelector('[js-scroll-footer]');
  const footer = document.querySelector('#footer');

  scrollFooterLink.addEventListener('click', event => {
    event.preventDefault();

    footer.scrollIntoView({
      behavior: 'smooth',
    });
  });
};
