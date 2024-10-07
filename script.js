console.log("ejecutando script con node")

const {libro1, libro2} = require("./data.js")
// 1. ejecuta TODO el código que haya en ./data.js
// 2. (opcional) si ese archivo exporta un valor, lo recibe y almacena en la variable
console.log(libro1)
console.log(libro2)

const describirLibro = require("./data2.js")

require("./conections/conection.js")

console.log( describirLibro(libro1) )