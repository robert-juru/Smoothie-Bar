import mainSmoothieIcon from './smoothie-bg.png'
import smoothiesHeaderIcon from './smoothies-header.png';

export function createHeader() {
    let header = document.createElement('header');
    let shopName = document.createElement('h1');
    let navWrapper = document.createElement('nav');
    let homeBtn = document.createElement('a');
    homeBtn.classList.add('btn');
    homeBtn.classList.add('home-btn');

    const smoothiesHeader = new Image();
    smoothiesHeader.src = smoothiesHeaderIcon;
    smoothiesHeader.classList.add('smoothies-header')

    let menuBtn = document.createElement('a');
    menuBtn.classList.add('btn');
    menuBtn.classList.add('menu-btn')

    let contactBtn = document.createElement('a');
    contactBtn.classList.add('btn');
    contactBtn.classList.add('contact-btn');

    shopName.textContent = 'Fuelicious';
    navWrapper.className = 'nav-wrapper';
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    header.appendChild(shopName);
    header.appendChild(smoothiesHeader);

    navWrapper.appendChild(homeBtn);
    navWrapper.appendChild(menuBtn);
    navWrapper.appendChild(contactBtn);
    header.appendChild(navWrapper);

    return header ;
}

export function createHomePage() {

    let homePageContainer = document.createElement('main');
    let shopInfo = document.createElement('section');
    let welcomeArticle = document.createElement('article');
    let slogan = document.createElement('h2');
    let description = document.createElement('p');
    let checkMenuBtn = document.createElement('button');
    let shopPhoto = document.createElement('section');

    homePageContainer.className = 'home-container';
    shopInfo.className = 'shop-info';
    welcomeArticle.className = 'welcome-article';

    slogan.textContent = 'Taste the Joy of Balance';
    welcomeArticle.appendChild(slogan);

    description.innerHTML = `Indulge in a world of delicious and nutritious smoothies at
        <strong>Fuelicious</strong>. Our passion for health and flavor
        comes together to offer you a menu that's bursting with vitality.
        Whether you're looking for a refreshing post-workout boost or a
        guilt-free treat, our smoothies are crafted to satisfy your taste
        buds and nourish your body.`
    welcomeArticle.appendChild(description);

    checkMenuBtn.className = 'checkmenu-btn';
    checkMenuBtn.textContent = 'Check Our Menu';

    welcomeArticle.appendChild(checkMenuBtn);
    shopInfo.appendChild(welcomeArticle);
    homePageContainer.appendChild(shopInfo);

    shopPhoto.className = 'shop-photo';
    const mainSmoothie = new Image();
    mainSmoothie.src = mainSmoothieIcon;
    shopPhoto.appendChild(mainSmoothie);
    homePageContainer.appendChild(shopPhoto);

    return homePageContainer;
}

