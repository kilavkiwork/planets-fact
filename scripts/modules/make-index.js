function makeIndex(namesPlanets, menuName) {
  try {
    return namesPlanets.indexOf(menuName);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { makeIndex };
