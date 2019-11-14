const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// declaração dos models
const {User, Product, OrderItem, Order} = require('./models')

// criação das APIs - user
app.post('/user', async (req,res) => {
    const user = await User.create(req.body)
    res.json(user)
})
app.get('/user', async (req,res) => {
    const users = await User.findAll()
    res.json(users)
})
app.delete('/user/:email', async (req,res) => {
    const users = await User.destroy({
        where: {email: req.params.email}
    })
    res.json(users)
})
app.put('/user/:email', async (req, res) => {
     const user = await User.update(req.body, {where: { email: req.params.email} })
    
    res.json(user);
    
  });
// criação das APIs - product
app.post('/product', async (req,res) => {
    const product = await Product.create(req.body)
    res.json(product)
})
app.get('/product', async (req,res) => {
    const products = await Product.findAll()
    res.json(products)
})
// criação das APIs - pedido
app.post('/order', async (req,res) => {
    const order = await Order.create(req.body , {
        include:[OrderItem]
    })
    res.json(order)
})
app.get('/order', async (req,res) => {
    const orders = await Order.findAll({include:[User,OrderItem]})
    res.json(orders)
})
app.get('/order/:id', async (req,res) => {
    const order = await Order.findByPk(req.params.id, {include:[User,OrderItem]})
    res.json(order)
})

app.get('/orderitem', async (req,res) => {
    const orderitens = await OrderItem.findAll({include:[Product,Order]})
    res.json(orderitens)
})
app.listen(3000)