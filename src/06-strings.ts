(()=>{

  let productTitle = 'Tablet';
  productTitle = 'Tablet 2';
  console.log('productTitle', productTitle);

  const productDescription = "Tablet 10 pulgadas"; //Usamos comillas dobles para evitar problemas con las comillas simples, por ejemplo el apostrofe en inglés
  console.log('productDescription', productDescription);

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  Te deja trabajar con
  multiples lineas :O
  `;
  console.log('summary', summary);

})();
