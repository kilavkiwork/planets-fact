function makePlanet(data, currentIndex) {
  try {
    return data[currentIndex];
    // console.log(data);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { makePlanet };
