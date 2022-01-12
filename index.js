// OBJETOS
// NO PRIMITIVO
// ESTAN COMPUESTOS POR PROPIEDADES Y VALORES

const mexico = {
    comida: "Tacos" // Propiedad "comida" y valor "Tacos"
}

console.log(mexico);

// DOT NOTATION - NOTACION DE PUNTO
console.log(mexico.comida);

// BRACKET NOTATION - NOTACION POR CORCHETES
console.log(mexico["comida"]);

const olympicRecords = {
    athletics100Men: "Justin Gatlin",
    athleticsLongJumpMen: "Mike Powel",
    swimming200Men: "Michael Phelps",
    "swimming 200 Women": "Ariarne Titmus" // Si quisieramos propiedades con espacios. Sin embargo, usando esto no se puede usar dot notation. Acceso solo por dot notation.
}

console.log(olympicRecords.athletics100Men);
console.log(olympicRecords["athletics100Men"]);

console.log(olympicRecords["swimming 200 Women"]);

// B. AGREGAR PROPIEDADES

const refresco = {
    nombre: "Coca cola",
    color: "Oscuro",
    precio: 12,
    tamanos: [600, 1000]
}

refresco.envase = "Plastico"

console.log("Objeto de refresco:", refresco)

refresco["competidor"] = "Pepsi"

console.log(refresco)

// C. PROPIEDADES Y CICLOS

// OBJECT.KEYS()
// Metodo que permite convertir las propiedades de un objeto en propiedades de un arreglo.

const arrRefresco = Object.keys(refresco)

console.log(arrRefresco)

// for ... in

// for (VARIABLE KEY in OBJECT)
for (let key in refresco) {
    // console.log(`La propiedad es: ${key}`)
    // if (key === "competidor") console.log("Encontre la prop competidor")
    console.log(`La propiedad es ${key} y su valor es ${refresco[key]}`)
}

// OBJECT.VALUES()
// Metodo que permite convertir los valores de un objeto en elementos de un arreglo.

const arrRefrescoValores = Object.values(refresco)

console.log("arrRefrescoValores", arrRefrescoValores)

// ARREGLOS CON OBJETOS
//                    0   1    2
const arrNumbers = [5873, 4687, 500]

console.log(arrNumbers[0])
console.log(arrNumbers[1])
console.log(arrNumbers[2])

const mike = [
    {
        name: "Mike",
        age: 34
    }
]

console.log(mike[0].age) // =>34

let estudiantesIH = [
    {
        name: "Leo",
        location: "Queretaro",
        weather: "frijolito"
    },
    {
        name: "Joaquin",
        location: "Hidalgo",
        weather: "Frijolito duro"
    },
    {
        name: "Alan",
        location: "Atizapan",
        weather: "Frijolito poquito"
    },
    {
        name: "Alexis",
        location: "Aguascalientes",
        weather: "Frijolito poquito"
    }
]

console.log(estudiantesIH[2].location) // => "Atizapan"

// JS TRADICIONAL - ES5

estudiantesIH.push({
    name: "Emmanuel",
    location: "CDMX",
    weather: "Calorcito"
})

console.log(estudiantesIH)

// JS TRADICIONAL - ES6

estudiantesIH = [
    ...estudiantesIH, // SPREAD OPERATOR - Pasar todos los elementos de arreglo indicado
    {
        name: "Roman",
        location: "CDMX",
        weather: "Calorcito"
    }
]

console.log(estudiantesIH)

const deportesDeEquipo = [
    {
        nombre: "Basquetbol",
        jugadores: 5,
        cancha: "duela",
    },
    {
        nombre: "Soccer 7",
        jugadores: 7,
        cancha: "pasto",
    },
    {
        nombre: "Voleibol",
        jugadores: 6,
        cancha: "duela",
    },
]

console.log(deportesDeEquipo[0].cancha)
console.log(deportesDeEquipo[1].jugadores)
console.log(deportesDeEquipo[2].nombre)
