(()=>{

  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  login ({
    email: 'angel@gmaul.com',
    password: 123456,
  });

  type Sizes = 'small' | 'medium' | 'large';
  type Product = {
    title: string,
    createdAt: Date,
    price: number,
    size?: Sizes
  };

//const products: any[] = []; //any no es una buena práctica, deja ingresar cualquier tipo de dato
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Shirt',
    createdAt: new Date(1991, 1, 1),
    price: 100,
  });

  addProduct({
    title: 'T-Shirt',
    createdAt: new Date(1991, 1, 1),
    price: 100,
    size: 'small',
  });

  console.log(products);

})();
