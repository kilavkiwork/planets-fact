function buttonsSwitcher(buttonName) {
  try {

    document.querySelector('#content').textContent = currentPlanet[currentButton]['content']
    document.querySelector('#source').href = currentPlanet[currentButton]['source']
    console.log(buttonName);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { buttonsSwitcher };




/* buttonsContainer.addEventListener('click', (ev) => {
  infoSwitcher(ev, currentButton)

})

function infoSwitcher(ev, currentButton) {
  let button = ev.target.closest('button')
  currentButton = button.value

  document.querySelector('#content').textContent = currentPlanet[currentButton]['content']
  document.querySelector('#source').href = currentPlanet[currentButton]['source']
  
  console.log(currentButton);
  
} */