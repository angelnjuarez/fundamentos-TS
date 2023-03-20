export type Sizes = 'small' | 'medium' | 'large';
export type Product = {
  title: string,
  createdAt: Date,
  price: number,
  size?: Sizes,
  stock: number,
};
