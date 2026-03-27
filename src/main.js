import { handleWindowOpen } from './js/toggleModal';
import { handleScrollToTop } from './js/scrollToTop';

handleWindowOpen({
  btnOpenSelector: 'data-menu-open', // data attribute for the menu open button
  btnCloseSelector: 'data-menu-close', // data attribute for the menu close button
  backdropSelector: 'data-menu', // data attribute for the menu backdrop
});

handleScrollToTop();
