(()=>{

  //Basicamente cualquier cosa, quita la restricción de tipos
  //Se usa en migraciones, o cuando usamos alguna libreria no está tipada/mal tipada
  //Pero se aconseja no usarlo, porque pierde el sentido de TS
  let myDinamicVar:any;
  myDinamicVar = 1;
  myDinamicVar = null;
  myDinamicVar = true;

  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toUpperCase(); //as string es un casting, para que TS sepa que es un string
  console.log(rta);

  myDinamicVar = 12123;
  const rta2 = (<number>myDinamicVar).toFixed(); //otra forma de casting
  console.log(rta2);

})();
