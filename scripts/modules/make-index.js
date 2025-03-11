function makeIndex(namesPlanets, menuName) {
  try {
    return namesPlanets.indexOf(menuName)
    console.log(currentIndex);
    
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { makeIndex };


// function defineIndex(menuName) {
//   currentIndex = namesPlanets.indexOf(menuName)
// }