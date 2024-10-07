const http = require("http")

const myServer = http.createServer((request, response) => {
  // request es toda la información de la llamada/solicitud
  // response es toda la iformación que la respuesta que servidor entregará
  console.log("el usuario está tratando de acceder a: ", request.url)
  console.log("un cliente me está contactando")

  if (request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'}); // header
    response.write("Bienvenido, te has contactado con el patata server, que deseas?") // body
    response.end()
  } else if (request.url === "/patatas") {
    response.writeHead(200, {'Content-Type': 'text/plain'}); // header
    response.write("Aqui tienes unas patatas") // body
    response.end()
  }


})

myServer.listen(5005) // metodo que activa el servidor y escucha posibles clientes