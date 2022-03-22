const express = require('express');
const app = express();
const PORT = 5000;

const usersData = [
    {
        name : 'Arslan',
        age: 2
    },
    {
        name : 'Qais',
        age : 22
    },
    {
        name : 'Neha',
        age : 222 
    }
];


const productsData = [
    {
        name : 'Comb',
        price: 210 
    },
    {
        name : 'Gold',
        age : 1000
    },
    {
        name : 'Silver',
        age : 500 
    }
];

app.get( '/' , (req, res) => {
    res.send('You have reached the API');
});

app.get('/users', (req, res) => {
    res.json(usersData);
});

app.get('/users/:age', (req, res) => {
    const age = req.params.age;
    let currentUser = undefined;

    for(let i = 0; i < usersData.length; i++){
        if(usersData[i].age == age){
            currentUser = usersData[i];
        }
    }

    if(currentUser == undefined){
        res.json(
            {
                message : "User with this age doesn't exit",
            }
        );
    }else{
        res.json(currentUser);
    }

    
});

app.get('/products', (req, res) => {
    res.json(productsData);
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT );
});