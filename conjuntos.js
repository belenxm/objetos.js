//- Un nuevo Set con los nombres de tu familia

const familia = new Set([
    {nombre: "Sebastian"},
    {nombre:"Silvina"},
    {nombre:"Anabella"},
    {nombre:"Enzo"},
    {nombre:"Fernanda"}
])

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)


familia.add({nombre:"Fernanda"})
console.log(familia)


//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

familia.add({nombre:"Javascript"})
console.log(familia)