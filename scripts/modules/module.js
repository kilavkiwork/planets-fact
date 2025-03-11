function module(data) {
  try {
    console.log(data);
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { module };
