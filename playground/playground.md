# Playground

## Exercise 1 - *Map method*
>En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.
La solución debería tener un input y output como los siguientes: 

Input  
`ultiplyElements([2, 4, 5, 6, 8]);`  

Output  
`[4,8,10,12, 16]`  

```js
export function multiplyElements(array) {
   // Tu código aquí 👈
   return array.map(e => e * 2);
}

multiplyElements([2, 4, 5, 6, 8])
// return [4,8,10,12, 16]
```
---

## Exercise 2 - *Map method*

>Tienes un array de productos con los siguientes atributos:
    name
    price
    stock
Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.
Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.
La solución debería tener un input y output como los siguientes:
```js
function addNewAttr(array) {
  return array.map( e => ({ ...e, taxes: Math.trunc(e.price * 0.19) }) );
}

function addNewAttr2(array) {
  return array.map( e => {
    e.taxes = Math.trunc(e.price * 0.19);
    return e;
  });
}

console.log(addNewAttr([
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]));

/*
Output:
[
  { name: 'Product 1', price: 1000, stock: 10, taxes: 190 },
  { name: 'Product 2', price: 2000, stock: 20, taxes: 380 }
]
*/
```
