// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
    nombre: "Fernanda",
    apellido:"Morales",
    edad: 31,
    altura: 1.62,
    eresDesarrollador: true

}
console.log(datosPersonales)

//- Una variable que obtenga tu edad a partir del objeto anterior

var prop = "edad"
console.log(datosPersonales[prop])


//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amigas

const lista = [
     datosPersonales ,
    {   
        nombre: "Salome ",
        apellido: "Lopez",
        edad: 32,
        altura: 1.70},
    { 
        nombre: "Florencia",
        apellido: "Martinez",
        edad: 30,
        altura: 1.75,
    }
] 

console.log(lista[2].nombre)

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor


lista.sort((a, b) => a.edad - b.edad)
console.log(lista)

