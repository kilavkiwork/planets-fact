import {mobileMenu, hamburger, activeMenu} from "./modules/active-menu.js";
const jsonPath = '../assets/data/data.json'
document.addEventListener('DOMContentLoaded', function () {

  // завантаження інформації для сайту
  async function loadJson(jsonFile) {
    try {
      const response = await fetch(jsonFile)

      if (!response.ok) {
        throw new Error(`Помилка завантаження даних: ${response.status}`)
      } else {
        console.log(response);
      }
      
      const data = await response.json()

      
      
      
      
      
      
    } catch (error) {
      console.error('Помилка у "function loadJson()"', error);
    }
  }

  // мобільне меню
  hamburger.addEventListener('click', activeMenu);
  // 

  // main
  loadJson(jsonPath)
});
