// types.ts

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
};

export type Order = {
  id: string;
  userId: string;
  products: Product[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
};