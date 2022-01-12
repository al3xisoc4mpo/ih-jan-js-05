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
    tamanos: [600,1000]
}

refresco.envase = "Plastico"

console.log("Objeto de refresco:", refresco)

refresco["competidor"] = "Pepsi"

console.log (refresco)