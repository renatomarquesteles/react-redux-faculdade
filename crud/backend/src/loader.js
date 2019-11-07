const server = require('./config/server');
require('./config/banco');
require('./config/database');
require('./config/routes')(server);
