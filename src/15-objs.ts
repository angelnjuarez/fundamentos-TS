(()=>{

  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  login ({
    email: 'angel@gmaul.com',
    password: 123456,
  });

  type Sizes = 'small' | 'medium' | 'large';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    price: number,
    size?: Sizes
  }) => {
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
