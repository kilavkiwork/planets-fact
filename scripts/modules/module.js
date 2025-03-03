const privateMessage = 'This is module from "./modules/module.js"';

function helloModule(params) {
  console.log(params);
}

export { helloModule, privateMessage };
