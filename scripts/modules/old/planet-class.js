class Planet {
  constructor(planetData) {
    this.name = planetData.name;
    this.overview = planetData.overview;
    this.structure = planetData.structure;
    this.geology = planetData.geology;
    this.rotation = planetData.rotation;
    this.revolution = planetData.revolution;
    this.radius = planetData.radius;
    this.temperature = planetData.temperature;
    this.images = planetData.images;
  }

  addName() {
    document.querySelector('h1').textContent = this.name;
  }

  addRotation() {
    document.querySelector('#rotation').textContent = this.rotation;
  }

  addRevolution() {
    document.querySelector('#revolution').textContent = this.revolution;
  }

  addRadius() {
    document.querySelector('#radius').textContent = this.radius;
  }

  addTemperature() {
    document.querySelector('#temperature').textContent = this.temperature;
  }

  defineButton(buttons) {
    for (let button of buttons) {
      if (button.classList.contains('active')) {
        return button.value;
      }
    }
  }

  addContent(btnValue) {
    document.querySelector('#content').textContent = this[btnValue]['content'];
    document.querySelector('#source').href = this[btnValue]['source'];
  }

  countImageSize(path) {
    let img = new Image();
    // img.src = path;
    img.onload = () => {
      document.documentElement.style.setProperty(
        '--image-size',
        `${img.width}px`
      );
    };
    // Встановлюємо шлях до зображення
    img.src = path;
  }

  createPathToImage(btnValue) {
    let oldPath =
      this.images[
        btnValue === 'overview'
          ? 'planet'
          : btnValue === 'structure'
          ? 'internal'
          : btnValue
      ];
    return oldPath.replace('assets/', 'assets/images/');
  }

  addImage(btnValue) {
    let newPath = this.createPathToImage(btnValue)
    let imgPlanet = document.querySelector('img#planet')
    let parentPlanets = document.querySelector('.planet')
    let imgGeology = document.createElement('img');
    imgGeology.setAttribute('id', 'geology');
    let isImgGeology = document.querySelector('#geology')
    
    if (btnValue === 'geology') {
      let geoPath = this.images['planet'].replace('assets/', 'assets/images/')
      this.countImageSize(geoPath)
      imgPlanet.src = geoPath;
      imgGeology.src = newPath;
      parentPlanets.insertAdjacentElement('beforeend', imgGeology)
    } else {
      if (isImgGeology) {
        parentPlanets.removeChild(isImgGeology)
      }
      this.countImageSize(newPath);
      imgPlanet.src = newPath;
    }
    

    // this.addImageGeology(btnValue, newPath);
  }
  //
}

export { Planet };
