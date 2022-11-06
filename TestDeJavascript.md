# Test de Javascript
> Visitame en [mi Github](https://www.github.com/yerkocodes) 😉🤘
## Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es una variable y para qué sirve?**
    - Una variable es un espacio en memoria que nos sirve para almacenar algún valor en especifico. A este almacenamiento lo podemos identificar con un nombre que en programación suele ser con lowercamelcase.

- **¿Cuál es la diferencia entre declarar e inicializar una variable?**
    - Declarar una variable hace referencia cuando asigna un nombre a un espacio de memoria pero no lo utiliza con ningún valor. E inicializar una variable hace referencia cuando a este espacio de memoria con identificador le asignamos un valor en el.

- **¿Cuál es la diferencia entre sumar números y concatenar strings?**
    - Sumar números es cuando al igual que en una calculadora introducimos dos valores y retorna el resultado como un valor. Concatenar string hace referencia cuando unimos dos palabras una tras la otra por ejemplo "Buenos" + "días" = "Buenosdias"

- **¿Cuál operador me permite sumar o concatenar?**
    - Tanto el operador de suma como concatenación es el mismo, el de suma +

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:  

>Nombre = String  
Apellido = String  
Nombre de usuario en Platzi = String  
Edad = Number  
Correo electrónico = String  
Mayor de edad = Boolean  
Dinero ahorrado = Number  
Deudas = Cuantas deudas? = Number || Especificar las deudas = Array de objetos

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

``` javascript
let nombre = "Yerko";
let apellido = "Cortes";
let nombreDeUsuarioEnPlatzi = "yerkocodes";
let edad = 25;
let correoElectrónico = "yerko@email.com";
let mayorDeEdad = true;
let dineroAhorrado = 3000;
let deudas = 10000;
```

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

``` javascript
let nombre = "Yerko";
let apellido = "Cortes";

let dineroAhorrado = 3000;
let deudas = 10000;

// Nombre completo (nombre y apellido)
console.log(nombre + " " + apellido);

// Dinero real (dinero ahorrado menos deudas)
console.log(dineroAhorrado - deudas)
  ```

 ## Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
  - **¿Qué es una función?**
  	- Una función es una especie de paquete con muchas instrucciones dentro, el cual podemos invocar luego llamándolo por su identificador y este ejecutara automáticamente las instrucciones dentro.
  - **¿Cuándo me sirve usar una función en mi código?**
  	- Cuando vemos la necesidad de repetir las mismas acciones es ideal empaquetar dichas acciones en una función y así optimizamos el código reutilizandolo.
  - **¿Cuál es la diferencia entre parámetros y argumentos de una función?**
  	- Los **parámetros** son la referencia que hacemos a algún dato entregado a una función cuando estamos creando su lógica. 
    Por el contrario los **argumentos** son el valor especifico que le entregamos a nuestras funciones cuando las invocamos para que estas se ejecuten correctamente.

  2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

  ``` javascript
  //const name = "Juan David";
  //const lastname = "Castro Gallego";
  //const completeName = name + lastname;
  //const nickname = "juandc";
  //
  //console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

  function sayHello(name, lastname, nickname) {
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
  };
```

## Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es un condicional?**
	- Es una validación que se hace para saber que debe hacer el programa en diferentes casos.
- **¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**
	- Existen condicionales IF, If Else, Switch, ternario y se podría decir que los de ciclos.  

**If:**
``` javascript
// Este condicional evalúa una expresión y de cumplirse ejecutara lo indicado dentro, de lo contrario continuara con el programa de forma secuencial.
let live = true;
if(live == true) {
  console.log("Have a nice day!");
}
```
**If Else:**
``` javascript
// Este condicional es igual al IF, solo que se le añade una opción en el caso de que no se cumpla ejecutara instrucciones especificadas antes de continuar con el resto del programa.
let live = true;
if(live == true) {
  console.log("Have a nice day!");
} else {
  console.log("R.I.P");
}
```
**Switch:**
``` javascript
let live = true;
switch(live) {
  case true:
    console.log("Have a nice day!");
    break;
  case false:
    console.log("R.I.P");
    break;
  default:
    console.log("Are you a ghost?");
    break;
}
```
**Ternario:**
``` javascript
let live = true;
live ? console.log("Welocome") : console.log("RIP");
```

- **¿Puedo combinar funciones y condicionales?**
  - Se pueden hacer combinaciones de ambas llamando tanto ciclos dentro de las funciones como funciones dentro de los ciclos. Todo dependerá de la lógica de nuestro programa.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

``` javascript
const tipoDeSuscripcion = "Basic";

//switch (tipoDeSuscripcion) {
//  case "Free":
//    console.log("Solo puedes tomar los cursos gratis");
//    break;
//  case "Basic":
//    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//    break;
//  case "Expert":
//    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//    break;
//  case "ExpertPlus":
//    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//    break;
//}


// Free, Basic, Expert, ExpertPlus
if( tipoDeSuscripcion == "Free" ) {
  console.log("Solo puedes tomar los cursos gratis");
} else if( tipoDeSuscripcion == "Basic" ) {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if( tipoDeSuscripcion == "Expert" ) {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if( tipoDeSuscripcion == "ExpertPlus" ) {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
  console.log("No cuentas con ninguna suscripcion disponible.");
};
```

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

``` javascript
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}

if(tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

if(tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if(tipoDeSuscripcion == "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

```

    💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

``` javascript
let suscriptions = [
  {
    type: "Free", 
    description: "Solo puedes tomar los cursos gratis"
  },
  {
    type: "Basic", 
    description: "Puedes tomar casi todos los cursos de Platzi durante un mes"
  },
  {
    type: "Expert", 
    description: "Puedes tomar casi todos los cursos de Platzi durante un año"
  },
  {
    type: "ExpertPlus", 
    description: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  }
];

let user123 = {
  name: "Yerko",
  userName: "yerkodigo",
  email: "yerko@email.com",
  suscription: "Expert",
  getSuscription: function() {
    return this.suscription;
  }
};

const userSuscription = (obj) => {
  const result = suscriptions.find(e => e.type.toLowerCase() === obj.getSuscription().toLowerCase());

  if(result != undefined) {
    return `Hola ${obj.name}, tu suscripción es: "${obj.getSuscription()}" ${result.description}`;
  }

  return "No cuentas con una suscripción disponible.";
}

console.log(userSuscription(user123));
```

## Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- **¿Qué es un ciclo?**
    - Un ciclo es un bucle que se repetirá las veces que la condición especificada en el se cumpla, una vez no lo haga el ciclo se cerrará y continuará con el programa.
- **¿Qué tipos de ciclos existen en JavaScript?**
    - Existen los ciclos for, while, do while.
- **¿Qué es un ciclo infinito y por qué es un problema?**
    - Un ciclo infinito es cuando no posee un condicional que detenga la ejecución, si bien puede tener un condicional este nunca se inválida. El problema de ésto es que puede colapsar nuestra ejecución gastando memoria sin control.
- **¿Puedo mezclar ciclos y condicionales?**
    - Los ciclos while, do while y for tienen en su estructura un condicional para saber los límites de la ejecución de estos.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

``` javascript
//for (let i = 0; i < 5; i++) {
//    console.log("El valor de i es: " + i);
//}

let i = 0;
while(i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

//for (let i = 10; i >= 2; i--) {
//    console.log("El valor de i es: " + i);
//}

let a = 10;
while(a >= 2) {
  console.log("El valor de a es: " + a);
  a--;
}

```

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

    💡 Pista: puedes usar la función prompt de JavaScript.

``` javascript
let userResponse;

do {
  userResponse = parseInt(prompt("Cual es el resultado de 2 + 2?"));
  if(userResponse == 4) {
    //console.log("Felicitacionesss!");
    document.write("Felicitacionesss!"); // To show message in html
  }
} while(userResponse != 4);
```

## Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?
Un array es una colección o lista de datos pudiendo ser estos de tipo String, Number, Object, Array, etc.
- **¿Qué es un objeto?**
    - Un objeto es la representación de una entidad en el mundo real conteniendo atributos y comportamientos.
- **¿Cuándo es mejor usar objetos o arrays?**
    - Cuando necesitamos tener una lista de datos como nombres o muchos elementos lo ideal es usar Arrays. Cuando necesitemos crear representaciones de objetos de la vida real que contengan múltiples datos y comportamientos propios lo ideal es usar Objectos.
- **¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**
    - Se pueden contener unos con otros por ejemplo se puede crear un Array de Objetos y también cada objeto puede tener como atributo un Array de información propia del objeto.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
``` javascript
const firstElementOfArray = array => array[0];
console.log(firstElementOfArray(["Yerko", "Cortes", "Baeza"]));
```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
``` javascript
const printElementsOfArray = array => array.forEach(e => console.log(e));
printElementsOfArray(["Yerko", "Cortes", "Baeza"]);
```

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
``` javascript
const printAttributesOfObject = object => {
  for(attr in object) {
    console.log(`${attr} = ${object[attr]}`);
  };
};

printAttributesOfObject(user123);
```


