'use strict';

const HEADER_CONTAINER = document.querySelector(`.header__container`);
const MENU_BUTTON = HEADER_CONTAINER.querySelector(`.header__button`);
const NAVIGATION_MENU = HEADER_CONTAINER.querySelector(`.header__nav`);


function showMenu() {
    document.querySelector(`body`).classList.toggle(`lock-scroll`);
    NAVIGATION_MENU.classList.toggle(`header__nav--mobile`);
};

MENU_BUTTON.addEventListener(`click`, showMenu);