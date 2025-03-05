const bodyClass = document.querySelector('body').classList.value;

function createPlanet(data) {
  for (let index = 0; index < data.length; index++) {
    let currentEl = data[index]['name'].toLowerCase();
    if (currentEl === bodyClass) {
      return data[index]; // Повертаємо знайдений об'єкт
    }
  }
  return null; // Якщо нічого не знайдено, повертаємо null
}

export { createPlanet };
