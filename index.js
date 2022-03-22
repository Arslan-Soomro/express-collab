const express = require('express');
const app = express();
const PORT = 3000;

const productsRouter = require('./routes/products.route');
const usersRouter = require('./routes/users.route');

app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.get( '/' , (req, res) => {
    res.send('You have reached the API');
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT );
});