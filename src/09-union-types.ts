(()=>{

  let userId: number | string;
  userId = 1;
  userId = '1';

  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toUpperCase()}`);
    } else { //Sólo puede ser un number
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('hola');
  greeting(1.12313);

})();
