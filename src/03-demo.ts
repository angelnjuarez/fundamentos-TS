(()=>{ //IIFE

let myProductName = 'Producto 1'; //Variable definida en otro archivo. No se puede reasignar
let myProductPrice = 123; //Variable definida en otro archivo. No se puede reasignar

myProductName = 'change';
myProductName.toLocaleLowerCase();

myProductPrice.toFixed();

const myProductStock = 1000;
const myProductName2 = 'Producto 2';

})();
