## Variables y operaciones
---
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
- Una variable es un espacio en memoria que nos sirve para almacenar algun valor en especifico. A este almacenamiento lo podemos identificar con un nombre que en pogramacion suele ser con lowercamelcase.

¿Cuál es la diferencia entre declarar e inicializar una variable?
- Declarar una variable hace referencia cuando asigna un nombre a un espacio de memoria pero no lo utiliza con ningun valor. E inizializar una variable hace referencia cuando a este espacio de memoria con identificador le asignamos un valor en el.

¿Cuál es la diferencia entre sumar números y concatenar strings?
- Sumar numeros es cuando al igual que en una calculadora introducimos dos valores y retorna el resultado como un valor. Concatenar string hace referencia cuando unimos dos palabras una tras la otra por ejemplo "Buenos" + "dias" = "Buenosdias"

¿Cuál operador me permite sumar o concatenar?
- Tanto el operador de suma como concatenacion es el mismo, el de suma +

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre = String
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

  Funciones
  ---
  1️⃣ Responde las siguientes preguntas en la sección de comentarios:

  ¿Qué es una función?
  Una funcion es una especie de paquete con muchas instrucciones dentro, el cual podemos invocar luego llamandolo por su identificador y este ejecutara automaticamente las instrucciones dentro.
  ¿Cuándo me sirve usar una función en mi código?
  Cuando vemos la necesidad de repetir las mismas acciones es ideal empaquetar dichas acciones en una funcion y asi optimizamos el codigo reutilizandolo.
  ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  Los argumentos son la referencia que hacemos a algun dato entregado a una funcion cuando estamos creando su logica. Por el contrario los parametros son el valor especifico que le entregamos a nuestras funciones cuando las invocamos para que estas se ejecuten correctamente.

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
---
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un condicional?
Es una validacion que se hace para saber que debe hacer el programa en diferentes casos.
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
Existen condicionales IF, If Else, Switch, ternario y se podria decir que los de ciclos.
If:
``` javascript
// Este condicional evalua una expresion y de cumplirse ejecutara lo indicado dentro, de lo contrario continuara con el programa de forma secuencial.
let live = true;
if(live == true) {
  console.log("Have a nice day!");
}
```
If Else:
``` javascript
// Este condicional es igual al IF, solo que se le anade una opcion en el caso de que no se cumpla ejecutara instrucciones especificadas antes de continuar con el resto del programa.
let live = true;
if(live == true) {
  console.log("Have a nice day!");
} else {
  console.log("R.I.P");
}
```
Switch:
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
Ternario:
En ciclos:
¿Puedo combinar funciones y condicionales?

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

const userSuscription = (user) =>  {
  if(user.getSuscription() != null && user.suscription != "") {
    let result = suscriptions.find((sus) => sus.type.toLowerCase() == user.getSuscription().toLowerCase());
    return `Hola ${user.name}, tu suscripción es: "${user.getSuscription()}" ${result.description}`;
  } else {
    return "No cuentas con una suscripción disponible.";
  };
};

console.log(userSuscription(user123));

```

## Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un ciclo?
      Un ciclo es un bucle que se repetirá las veces que la condición especificada en el se cumpla, una vez no lo haga el ciclo se cerrará y continuará con el programa.
    ¿Qué tipos de ciclos existen en JavaScript?
      Existen los ciclos for, while, do while.
    ¿Qué es un ciclo infinito y por qué es un problema?
      Un ciclo infinito es cuando no posee un condicional que detenga la ejecución, si bien puede tener un condicional este nunca se inválida. El problema de ésto es que puede colapsar nuestra ejecución gastando memoria sin control.
    ¿Puedo mezclar ciclos y condicionales?
    Los ciclos while, do while y for tienen en su estructura un condicional para saber los límites de la ejecución de estos.

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

Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un array?
    ¿Qué es un objeto?
    ¿Cuándo es mejor usar objetos o arrays?
    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
