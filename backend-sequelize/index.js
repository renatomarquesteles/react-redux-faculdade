const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { User, Servico, Endereco, Cliente } = require("./app/models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User.create({ name: 'Pedro', email: 'pedro@pedro.com.br', password: '1234' });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Listar todos
app.get("/users", async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

app.get("/servicos", async (req, res) => {
  const servico = await Servico.findAll();
  return res.json(servico);
});

app.get("/enderecos", async (req, res) => {
  const endereco = await Endereco.findAll();
  return res.json(endereco);
});

app.get("/clientes", async (req, res) => {
  const cliente = await Cliente.findAll();
  return res.json(cliente);
});

// Criar
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.post("/servicos", async (req, res) => {
  const servico = await Servico.create(req.body);
  return res.json(servico);
});

app.post("/enderecos", async (req, res) => {
  const endereco = await Endereco.create(req.body);
  return res.json(endereco);
});

app.post("/clientes", async (req, res) => {
  const cliente = await Cliente.create(req.body);
  return res.json(cliente);
});

//Buscar
app.get("/users/:id", (req, res) => {});

app.get("/servicos/:id", async (req, res) => {
  const servico = await Servico.findOne({
    where: { id_servico: req.params.id }
  })
  
  return res.json(servico);
});

app.get("/enderecos/:id", async (req, res) => {
  const endereco = await Endereco.findOne({
    where: { id_endereco: req.params.id }
  })
  
  return res.json(endereco);
});

app.get("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.findOne({
    where: { id_cliente: req.params.id }
  })
  
  return res.json(cliente);
});

//Editar
app.put("/users", async (req, res) => {
  const user = await User.update(req.body, {
    where: { email: req.body.email }
  });

  res.json(user);
});

app.put("/servicos/:id", async (req, res) => {
  const servico = await Servico.update(req.body, {
    where: { id_servico: req.params.id }
  });

  return res.json(servico);
});

app.put("/enderecos/:id", async (req, res) => {
  const endereco = await Endereco.update(req.body, {
    where: { id_endereco: req.params.id }
  });

  return res.json(endereco);
});

app.put("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.update(req.body, {
    where: { id_cliente: req.params.id }
  });

  return res.json(cliente);
});

//Deletar
app.delete("/users", async (req, res) => {
  const user = await User.destroy({
    where: { email: req.body.email }
  });
  res.json(user);
});

app.delete("/servicos/:id", async (req, res) => {
  const servico = await Servico.destroy({
    where: { id_servico: req.params.id }
  });

  return res.json(servico);
});

app.delete("/enderecos/:id", async (req, res) => {
  const endereco = await Endereco.destroy({
    where: { id_endereco: req.params.id }
  });
  return res.json(endereco);
});

app.delete("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.destroy({
    where: { id_cliente: req.params.id }
  });
  return res.json(cliente);
});

app.listen(3000);
