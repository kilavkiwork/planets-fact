function makeNames(menuItems) {
  try {
    return [...new Set([...menuItems].map(item => item.dataset.menu))]
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { makeNames };


// function collectNames() {
//   namesPlanets = [...new Set([...menuItems].map(item => item.dataset.menu))]
// }
