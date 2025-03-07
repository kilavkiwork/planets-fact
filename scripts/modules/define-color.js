const rootColors = {
  '--mercury-color': '#419ebb',
  '--venus-color': '#eda249',
  '--earth-color': '#6d2ed5',
  '--mars-color': '#d14c32',
  '--jupiter-color': '#d83a34',
  '--saturn-color': '#cd5120',
  '--uranus-color': '#1ec1a2',
  '--neptune-color': '#497efa',
};

function defineColors(event) {
  let color = `--${event.id}-color`;
  document.documentElement.style.setProperty(
    '--current-color',
    rootColors[color]
  );
}

export { defineColors };
