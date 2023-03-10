//@ts-check

// Nos permite corregir errores en tiempo de programación
(async()=> {
  const myCart = [];
  const products: object = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET' //typo en la palabra method
    });
    const data = await rta.json(); //json() en lugar de parseJson()
    products.concat(data);
  }
  function getTotal() {
    let total = 0; //las variables const son constantes, reemplazo por lent
    for (let i = 0; i < products.length ; i++) {
      total += products[i].prize;
    }
    return total;
  }

  function addProduct(index: number) { //index es un número, no un objeto
    if (getTotal() <= limit) { //Faltaba () para invocar la función
      myCart.push(products[index]);
    }
  }

  await getProducts(); //Para invocar await, es necesario async antes
  addProduct(1); //typo producto en vez de product
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }

  // const rta = `${person}` +  `${limit}`; //No se pueden sumar objetos, pasamos a string
  // console.log(rta);
});
