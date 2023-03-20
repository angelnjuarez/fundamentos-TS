(()=>{
  type Sizes = 'small' | 'medium' | 'large';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  //A diferencia de JS, si paso parámetros de más, TS me lo marca como error
  const producto1 = createProductToJson('Camisa', new Date(), 12, 'small');
  console.log(producto1);
  console.log(producto1.title);

  //Arrow function se asigna a una variable
  const createProductToJson2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes //El signo de interrogación indica que es opcional, por defecto es undefined
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJson2('Camisa', new Date(), 12);
  console.log(producto2);
  console.log(producto2.size);

})()
