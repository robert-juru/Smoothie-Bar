import { createHomePage, createHeader } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js'
import './style.css';
import './button.css';

export function initializePage() {
    const content = document.querySelector('#content');
    const header = createHeader();
    const homePage = createHomePage();
    const menuPage = createMenuPage();
    const contactPage = createContactPage();
    const checkMenuBtn = homePage.querySelector('.welcome-article');

    content.classList.add('container');
    content.appendChild(header);
    content.appendChild(homePage);

    header.querySelector('.home-btn').addEventListener('click', () => {
        toggleContent(homePage, content, header);
    });

    checkMenuBtn.addEventListener('click', () => {
        toggleContent(menuPage, content, header);
    });

    header.querySelector('.menu-btn').addEventListener('click', () => {
        toggleContent(menuPage, content, header);
    });

    header.querySelector('.contact-btn').addEventListener('click', () => {
        toggleContent(contactPage, content, header);
    });
}

export function toggleContent(currentPage, content, header) {
    content.innerHTML = '';
    content.appendChild(header);
    content.appendChild(currentPage);
}

