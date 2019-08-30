module.exports = function(req, res, next) {
  // Permite acesso às APIs de qualquer IP
  res.header('Access-Control-Allow-Origin', '*');
  // Permite acesso às APIs com métodos GET, POST, PUT e DELETE
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  // Configura o header da resposta
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  // Executa próxima atividade
  next();
};
