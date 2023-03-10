(()=> {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew =  true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);

  isNew = random >= 0.5 ? true : false; //no se puede asignar un string a un boolean
  console.log('isNew', isNew);

  const myBoolean: Boolean = true; //es un objeto, no un tipo primitivo. No se puede usar como tipo primitivo
})();
