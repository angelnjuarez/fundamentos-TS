(()=>{
  //alias
  type UserID = string | number; //alias, igual en vez de dos puntos.
  let userId: UserID;

  function greeting(userId: string | number){
    if(typeof userId === 'string'){
        console.log(`string ${userId.toUpperCase()}`);
    }
  }

  //Literal typpes
  type ShirtSize = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: ShirtSize;

  shirtSize = 'S';
  shirtSize = 'M';
 // shirtSize = 's'; //error, debe ser mayúscula
})();
