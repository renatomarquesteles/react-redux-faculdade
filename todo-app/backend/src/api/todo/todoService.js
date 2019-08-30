// Cria uma instância do esquema do Todo
const Todo = require('./todo');

// Configura os métodos da API
Todo.methods(['get', 'post', 'put', 'delete']);
// Configura as opções da atualização
// Depois de atualizar, retorna a tarefa atualizada (new: true)
// Ao atualizar, os validadores devem ser utilizados (runValidators: true)
Todo.updateOptions({ new: true, runValidators: true });

// Exporta o esquema para ser utilizado em outros arquivos
module.exports = Todo;
