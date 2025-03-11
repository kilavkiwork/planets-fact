import { setImageSize } from './set-image-size.js';

function makePath(currentPlanet, buttonName) {
  try {
    let oldPath =
      currentPlanet.images[
        buttonName === 'overview'
          ? 'planet'
          : buttonName === 'structure'
          ? 'internal'
          : buttonName
      ];
    let newPath = oldPath.replace('assets/', 'assets/images/');
    
    setImageSize(newPath, buttonName !== 'geology'); // Для geology false

    return newPath;
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { makePath };

// function makePath(currentPlanet, buttonName) {
//     let oldPath =
//       currentPlanet.images[
//         buttonName === 'overview'
//           ? 'planet'
//           : buttonName === 'structure'
//           ? 'internal'
//           : buttonName
//       ];
//     let newPath = oldPath.replace('assets/', 'assets/images/');
//     setImageSize(newPath)
//     return newPath;
//   }
