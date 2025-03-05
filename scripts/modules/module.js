const bodyClass = document.querySelector('body').classList.value
const footer = document.querySelector('footer')

function testJson(data) {
  console.log(data);
  // console.log(data[0]['name']);

  data.forEach((element, index) => {
    let currentEl = element['name'].toLowerCase()
    if (currentEl === bodyClass) {
      console.log(data[index]);
      console.log(typeof data[index]);
      // footer.textContent = JSON.stringify(data[index])
      // return JSON.stringify(data[index])
    }
     
    // console.log(element['name'].toLowerCase());
    // console.log(classBody);
    
  });

  
}

export { bodyClass, testJson };
