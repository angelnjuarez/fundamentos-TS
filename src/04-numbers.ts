(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge += 1; //en JS es 281
  console.log('customerAge', customerAge);

  let productInStock: number; //como estoy declarando la variable, es necesario especificar el tipo
  // console.log('productInStock', productInStock); //si no está inicializada, me advierte que no tiene valor
  // if(productInStock > 10){
  //   console.log('Es mayor a 10');
  // }

  let discount = parseInt('123'); //el tipo es number
  console.log('discount', discount);
  if(discount <= 200){
    console.log('Aplica');
  }else{
    console.log('No aplica');
  }

  let hex = 0xfff; //hexadecimal
  console.log('hex', hex);

  let bin = 0b1010; //binario
  console.log('bin', bin);

  const myNumber: Number = 10; //es un objeto, no un tipo primitivo. No se puede usar como tipo primitivo
})();
