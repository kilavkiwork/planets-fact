import { mobileMenu, hamburger, activeMenu } from './modules/active-menu.js';
import { bodyClass, testJson } from './modules/module.js';
import { Planet } from './modules/planet-class.js';
import { createPlanet } from './modules/current-planet.js';
import { defineColors } from './modules/define-color.js';

const jsonPath = '../assets/data/data.json';
const buttons = document.querySelectorAll('button')
const menu = document.querySelector('.menu')
// console.log(buttons);


document.addEventListener('DOMContentLoaded', function () {
  // завантаження інформації для сайту
  async function loadJson(jsonFile) {
    try {
      //
      const response = await fetch(jsonFile);
      //
      if (!response.ok) {
        throw new Error(`Помилка завантаження даних: ${response.status}`);
      } else {
        // console.log(response);
      }
      //
      const data = await response.json();
      //
      const currentPlanet = createPlanet(data);
      const planet = new Planet(currentPlanet);
      const currentBtn = planet.defineButton(buttons)
      planet.addName();
      planet.addRotation()
      planet.addRevolution()
      planet.addRadius()
      planet.addTemperature()
      planet.addContent(currentBtn)
      planet.addImage(currentBtn)

      // console.log(typeof currentBtn);
      console.log(currentPlanet);
      // testJson(data)
    } catch (error) {
      console.error('Помилка у "function loadJson()"', error);
    }
  }

  // мобільне меню
  hamburger.addEventListener('click', activeMenu);
  //
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      buttons.forEach(button => button.classList.remove('active'))
      event.target.classList.add('active')
      loadJson(jsonPath)
    })
  })

  menu.addEventListener('click', (e) => {
    let event = e.target;
    let eType = e.type
    defineColors(event, eType)
  })
  // menu.addEventListener('mouseover', (e) => {
  //   let hover = e.target
  //   let eType = e.type
  //   defineColors(hover, eType)
  // })
  
  // main
  loadJson(jsonPath);
});
