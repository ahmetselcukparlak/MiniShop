import { products } from './dataArrays';
export function getProducts() {
  const productsArray = [];
  products.map((data) => {
    productsArray.push(data);
  });
  return productsArray;
}
