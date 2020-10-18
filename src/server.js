//importar pacote express
const express = require('express');
//require exige que o pacote express esteja instalado

//iniciando express
const server = express()

//criar rota para servidor
server.get('/', (request, response)=> {
   return response.send('Hello from the server siiiiiide')
})

//ligar servidor
server.listen(5500)
