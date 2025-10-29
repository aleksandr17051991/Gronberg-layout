'use strict';

document.addEventListener('click', documentActions);

function documentActions(element) {
  const targetElement = element.target;
  if (targetElement.closest('.menu__icon')) {
    document.documentElement.classList.toggle('menu-open');
    document.body.classList.toggle('lock');
  }
}
