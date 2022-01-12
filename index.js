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

// NESTED DATA STRUCTURES

const schoolSystem = {
    schools: [
      {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
  };

console.log(schoolSystem.schools[2].classRooms[0].students[0].firstName) // => Christop

// Time to practice
//     Retrieve the "Fake School 3" object

console.log(schoolSystem.schools[2].name)

//     Retrieve the teacher with the first name of "Nathanael"

console.log(schoolSystem.schools[2].classRooms[1].teacher.firstName)

//     Retrieve the student with the first name of "Saul"

console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName)

//     Add a student with the name of Lucille D. Lozano to Fake School 2, in the first classroom.

schoolSystem.schools[1].classRooms[0].students.push({
    firstName: "Lucille",
    lastName: "D. Lozano",
    age: "unknown"
})

console.log(schoolSystem.schools[1].classRooms[0].students)