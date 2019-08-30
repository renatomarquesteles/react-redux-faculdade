// Define a porta do servidor HTTP
const port = 3003;

// Cria uma instância de body-parse
const bodyParser = require('body-parser');
// Cria uma instância do express
const express = require('express');
// Cria um servidor HTTP express
const server = express();
// Cria uma instância do arquivo cors
const allowCors = require('./cors');

// Configura servidor para obter dados do formulário do usuário
server.use(bodyParser.urlencoded({ extended: true }));
// Configura o servidor para dados chegarem no formato JSON
server.use(bodyParser.json());
// Configura servidor para usar o cors
server.use(allowCors);

// Sobe o servidor
server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
