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

const menuItem = document.querySelectorAll('.menu__item');

// function cc(menu__item) {

// }

function defineColors(event, eType) {
  let color = `--${event.id}-color`;
  // console.log(eType);
  document.documentElement.style.setProperty(
    '--current-color',
    rootColors[color]
  );

  // if (eType === 'click') {
  //   document.documentElement.style.setProperty(
  //     '--current-color',
  //     rootColors[color]
  //   );
  // }

  // if (eType === 'mouseover') {
  //   menuItem.forEach((item) => {
  //     if (item.id === event.id) {
  //       item.style.background = 'red';
  //     }
  //   });
  //   // console.log(event.id);
  // }
}

export { defineColors };
