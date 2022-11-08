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
