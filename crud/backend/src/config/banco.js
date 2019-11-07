const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'docker',
  database: 'tic'
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

client.query('SELECT * FROM usuario', (err, res) => {
  if (err) throw err;
  console.log(res.rows);
  client.end();
});
