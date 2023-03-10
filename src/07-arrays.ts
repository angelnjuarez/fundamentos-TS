(()=>{

  let prices = [1, 2, 2, 1, 1, 212, 'hola', true]; //numbers, strings, boolean
  // prices.push('asas'); sólo podemos meter números
  // prices.push(true);
  // prices.push({});
  prices.push(1213213213);

  let products = ['hola', true];

  const mixed: (number | string | boolean | Object)[] = ['hola', true]; //numbers, strings, boolean
  mixed.push(1);
  //ojo con objetos, porque casi todo en JS es un objeto

  let numbers = [1,2,2,1,1,212];
  numbers.map(item=>item*2); //como son números, podemos hacer operaciones numericas con ellos

})();
