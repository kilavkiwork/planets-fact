function setImageSize(path, isMain = true) {
  try {
    let image = new Image();
    image.onload = () => {
      if (isMain) {
        document.documentElement.style.setProperty(
          '--image-size',
          `${image.width}px`
        );
      }
    };
    image.src = path;
    console.log(path);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { setImageSize };
