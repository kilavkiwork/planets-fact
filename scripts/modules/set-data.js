import { makePath } from './make-path.js';

function setData(currentPlanet, buttonName) {
  try {
    document.querySelector('h1').textContent = currentPlanet['name'];
    document.querySelector('#rotation').textContent = currentPlanet['rotation'];
    document.querySelector('#revolution').textContent =
      currentPlanet['revolution'];
    document.querySelector('#radius').textContent = currentPlanet['radius'];
    document.querySelector('#temperature').textContent =
      currentPlanet['temperature'];

    document.querySelector('#content').textContent =
      currentPlanet[buttonName]['content'];
    document.querySelector('#source').href =
      currentPlanet[buttonName]['source'];

    document.querySelector('#planet').src = makePath(currentPlanet, buttonName);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { setData };
