// Cria uma instãncia node-restful
const restful = require('node-restful');
// Fazer a instância estar preparada para trabalhar com o mongoDB
const mongoose = restful.mongoose;

// Cria uma instância de um esquema do mongoDB
// contém as colunas da tabela
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Cria um modelo do esquema chamado Todo e o exporta
// para ser utilizado em outro arquivo
module.exports = restful.model('Todo', todoSchema);

// Tarefa: criar um esquema diferente
