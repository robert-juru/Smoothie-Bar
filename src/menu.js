import chocolateSmoothieIcon from './smoothie-menu/chocolate-smoothie.png'
import mangoSmoothieIcon from './smoothie-menu/mango-smoothie.png';
import vanillaSmoothieIcon from './smoothie-menu/vanilla-smoothie.png';
import blueberrySmoothieIcon from './smoothie-menu/blueberry-smoothie.png';
import greenSmoothieIcon from './smoothie-menu/green-smoothie.png';
import peanutSmoothieIcon from './smoothie-menu/peanut-butter-smoothie.png'
import menuIcon from './smoothie-menu/menu-icon.png';

export function createMenuPage() {
    const recipes = [
        {
            name: 'Mango Blast',
            ingredients: 'Fresh Alphonso mangoes, organic Greek yogurt, pure Himalayan honey, Madagascar vanilla extract, organic hemp seeds, high-quality mango protein powder.',
            price: '$10.99',
            imageSrc: 'src/smoothie-menu/chocolate-smoothie.png'
        },
        {
            name: 'Chocolate Delight',
            ingredients: 'Rich cacao nibs, organic almond butter, creamy cashew milk, Madagascar vanilla bean, organic peanut butter, premium chocolate protein powder.',
            price: '$9.99',
            imageSrc: 'smoothie-menu/chocolate-smoothie.png'
        },

        {
            name: 'Vanilla Punch',
            ingredients: 'Tahitian vanilla beans, Himalayan pink salt, organic almond butter, hand-rolled oat flakes, organic chia seeds, premium vanilla protein powder.',
            price: '$9.99',
            imageSrc: 'smoothie-menu/chocolate-smoothie.png'
        },
        {
            name: 'Green Energy',
            ingredients: 'Locally sourced kale, organic baby spinach, cold-pressed green apple juice, Japanese matcha powder, Himalayan sea salt, high-performance green protein powder.',
            price: '$11.99',
            imageSrc: 'smoothie-menu/chocolate-smoothie.png'
        },
        {
            name: 'Blueberry Booster',
            ingredients: 'Wild Maine blueberries, organic acai berry puree, Amazonian rainforest honey, Peruvian quinoa milk, Canadian maple syrup, top-grade blueberry protein powder.',
            price: '$11.99',
            imageSrc: 'smoothie-menu/chocolate-smoothie.png'
        },
        {
            name: 'Power Peanut Butter',
            ingredients: 'Artisanal small-batch peanut butter, hand-harvested wild bananas, Ecuadorian cacao nibs, Himalayan pink salt, premium peanut butter protein powder.',
            price: '$8.99',
            imageSrc: 'smoothie-menu/chocolate-smoothie.png'
        }
    ];

    const recipeImages = {
        'Chocolate Delight': chocolateSmoothieIcon,
        'Mango Blast': mangoSmoothieIcon,
        'Vanilla Punch': vanillaSmoothieIcon,
        'Blueberry Booster': blueberrySmoothieIcon,
        'Green Energy': greenSmoothieIcon,
        'Power Peanut Butter': peanutSmoothieIcon
    }

    const menuContainer = document.createElement('main');
    menuContainer.classList.add('menu-container');
    const menuHeader = document.createElement('div');
    const menuHeaderMsg = document.createElement('h2');

    const menuPhoto = new Image();
    menuPhoto.src = menuIcon;
    menuPhoto.classList.add('menu-photo');
    menuHeader.appendChild(menuPhoto);

    menuHeader.setAttribute('id', 'menu-header')
    menuHeaderMsg.textContent = 'Our Menu';
    menuHeader.appendChild(menuHeaderMsg)
    menuContainer.appendChild(menuHeader);

    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section')
    menuContainer.appendChild(menuSection);

    recipes.forEach(recipe => {
        const article = document.createElement('article');
        article.classList.add('recipe-card');

        article.innerHTML += `
          <h3>${recipe.name}</h3>
          <p>Ingredients: ${recipe.ingredients}</p>
          <h4>Price: ${recipe.price}</h4>
        `;

        const image = new Image();
        image.src = recipeImages[recipe.name];
        image.alt = `${recipe.name} Image`;
        image.classList.add('smoothie-icon');
        article.appendChild(image);
        menuSection.appendChild(article);
    })
    return menuContainer;
};