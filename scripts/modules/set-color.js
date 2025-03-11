function setColor(menuName) {
  try {
    let colorVar = `--${menuName.toLowerCase()}-color`
    let color = getComputedStyle(document.documentElement).getPropertyValue(colorVar)

    if (color) {
      document.documentElement.style.setProperty('--current-color', color)
    }
    console.log(color);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { setColor };
