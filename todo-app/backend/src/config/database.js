// Cria instância do mongoose
const mongoose = require('mongoose');
// Prepara para se conectar
mongoose.Promise = global.Promise;
// Conecta e exporta o resultado para ser utilizado em outro arquivo
module.exports = mongoose.connect('mongodb://localhost/todo');
