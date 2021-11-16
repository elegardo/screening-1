
export function generate(arrayOfNumbers: number[]): number[]{

  const arrayOfProducts: number[] = [];

  for(let i=0; i<arrayOfNumbers.length; i++){
    const product = arrayOfNumbers
    .filter(x => x != arrayOfNumbers[i])
    .reduce((acc, p) => acc * p, 1);
    arrayOfProducts.push(product);
  }    

  return arrayOfProducts;
}