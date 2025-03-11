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

      document.querySelector('#planet').src = makePath(currentPlanet, buttonName);
    }
    // console.log(newPath);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { setImage };


// function setImageSize(path) {
//   let image = new Image();
//   image.onload = () => {
//     document.documentElement.style.setProperty(
//       '--image-size',
//       `${image.width}px`
//     );
//   };
//   image.src = path;
// }

// function makePath(currentPlanet, buttonName) {
//   let oldPath =
//     currentPlanet.images[
//       buttonName === 'overview'
//         ? 'planet'
//         : buttonName === 'structure'
//         ? 'internal'
//         : buttonName
//     ];
//   let newPath = oldPath.replace('assets/', 'assets/images/');
//   setImageSize(newPath)
//   return newPath;
// }