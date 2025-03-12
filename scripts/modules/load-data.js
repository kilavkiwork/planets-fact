async function loadData(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Data not access');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Сталася помилка у: ', error.message);
  }
}

export { loadData };
