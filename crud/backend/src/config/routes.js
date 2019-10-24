// Cria uma instância do express -> servidor HTTP
const express = require('express');

// Executa uma função e retorna o resultado desta
// A função recebe como parâmetro a instância de um servidor
module.exports = function(server) {
  // API Routes
  // Cria instância das rotas da API
  const router = express.Router();
  // Configura o servidor para respoder a API /api
  server.use('/api', router);

  // TODO Routes
  // Cria instância que representa os métodos GET, POST, PUT e DELETE
  // Estes métodos estão associados ao esquema TODO
  const todoService = require('../api/todo/todoService');
  // Registra a rota /todos
  // Então, na verdade teremos a api /api/todos pronta para ser executada
  todoService.register(router, '/todos');

  const carService = require('../api/car/carService');
  carService.register(router, '/cars');
};
