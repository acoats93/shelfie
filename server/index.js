require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const {SERVER_PORT, DATABASE_STRING} = process.env
//controller
const {createProducts, getProducts, deleteProducts} = require('./controller')

app.use(express.json());

massive(DATABASE_STRING).then(db => {
    app.set('db', db);
    console.log('Database connected');
});

app.post('/api/inventory', createProducts)
app.get('/api/inventory', getProducts)
app.delete('/api/inventory/:id', deleteProducts)


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}, YEEEAAAHHH BOOOIII!!!!`))