import { makePath } from './make-path.js';

const parentPlanets = document.querySelector('.planet');
let imgGeology = document.createElement('img');
imgGeology.setAttribute('id', 'geology');

function setImage(currentPlanet, buttonName) {
  try {
    if (buttonName === 'geology') {
      document.querySelector('#planet').src = makePath(currentPlanet, 'planet');

      imgGeology.src = makePath(currentPlanet, buttonName);

      parentPlanets.insertAdjacentElement('beforeend', imgGeology);
    } else {
      let isGeology = document.querySelector('#geology');

      if (isGeology) {
        parentPlanets.removeChild(isGeology);
      }

      document.querySelector('#planet').src = makePath(
        currentPlanet,
        buttonName
      );
    }
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { setImage };
