(()=>{

  // Undefined y null son tipos, no se puede asignar a un tipo de dato
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; //se puede llegar a utilizar en algún framework
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'Hola';

  function hi (name: string | null) {
    let hello = 'Hola ';
    if(name){
      hello = hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hi2 (name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody'; //si name es null, no se ejecuta el toLowerCase. Optional chaining
    console.log(hello);
  }


  hi2('Juan');
  hi2(null);
})();
