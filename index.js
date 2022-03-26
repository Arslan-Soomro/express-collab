//Importing Express Package
const express = require('express');
const app = express();

//Default Port, the server runs on
const PORT = 3000;

const productsRouter = require('./routes/products.route');
const usersRouter = require('./routes/users.route');

//Configuring app to route requests from paths to their corresponding routers
app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.get( '/' , (req, res) => {
    res.send('You have reached the API');
});

//Function that starts the server
app.listen(PORT, () => {
    console.log("listening on port " + PORT );
});