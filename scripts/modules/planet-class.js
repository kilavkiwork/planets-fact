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

  getContent(btnValue) {
    document.querySelector('#content').textContent = this[btnValue]['content']
    document.querySelector('#source').href = this[btnValue]['source']
  }
  
//   
}

export { Planet };
