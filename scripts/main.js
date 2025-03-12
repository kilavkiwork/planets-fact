import { loadData } from './modules/load-data.js';
import { setData } from './modules/set-data.js';
import { makePlanet } from './modules/make-planet.js';
import { makeNames } from './modules/make-names.js';
import { makeIndex } from './modules/make-index.js';
import { setImage } from './modules/set-image.js';
import { setColor } from './modules/set-color.js';
import { hamburger, activateMenu } from './modules/activate-menu.js';

const jsonPath = 'assets/data/data.json';
const menuItems = document.querySelectorAll('[data-menu]');
const buttonsContainer = document.querySelector('.buttons');
const buttons = buttonsContainer.querySelectorAll('button');
const namesPlanets = makeNames(menuItems);
//

// Завантаження даних
loadData(jsonPath).then((data) => {
  if (data) {
    let defaultPlanet = data[0]; // Беремо першу планету
    let currentPlanet = defaultPlanet;
    let buttonName = 'overview';
    
    setData(currentPlanet, buttonName);
    setImage(currentPlanet, buttonName);
    
    // Додаємо обробники для кнопок одразу
    buttons.forEach((button) => {
      button.addEventListener('click', (ev) => {
        let buttonItem = ev.target;
        buttonName = buttonItem.value;
        
        buttons.forEach((item) => item.classList.remove('active'));
        buttonItem.classList.add('active');
        
        setData(currentPlanet, buttonName);
        setImage(currentPlanet, buttonName);
      });
    });
    
    menuItems.forEach((item) => {
      item.addEventListener('click', (ev) => {
        let menuItem = ev.target;
        let menuName = menuItem.dataset.menu;
        
        // Додаємо глобальну назву планети
        document.documentElement.id = menuName;
        
        menuItems.forEach((item) => item.classList.remove('active'));
        menuItem.classList.add('active');
        //
        let currentIndex = makeIndex(namesPlanets, menuName);
        currentPlanet = makePlanet(data, currentIndex);
        buttonName = 'overview';
        
        // Очищаємо активний стан кнопок
        buttons.forEach((button) => button.classList.remove('active'));
        
        // Робимо кнопку "Overview" активною (припустимо, це перша кнопка)
        buttons[0].classList.add('active');
        
        setData(currentPlanet, buttonName);
        setImage(currentPlanet, buttonName);
        setColor(menuName);
      });
    });
  } // if
});

hamburger.addEventListener('click', activateMenu)
