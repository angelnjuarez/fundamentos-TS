import { addProduct, calcStock, products} from "./product.service";

addProduct({
  title: 'Shirt',
  createdAt: new Date(1991, 1, 1),
  price: 100,
  stock: 10,
});

addProduct({
  title: 'T-Shirt',
  createdAt: new Date(1991, 1, 1),
  price: 100,
  size: 'small',
  stock: 10,
});

console.log(products);
const totalStock = calcStock();
console.log(totalStock);
