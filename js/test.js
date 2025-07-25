'use strict';

const btnClose = document.querySelector('.close-btn');

btnClose.addEventListener('click', () => {
  history.back();
});
