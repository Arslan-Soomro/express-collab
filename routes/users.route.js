const express = require('express');
const router = express.Router();
const dumData = require('../dummyData');

//Handles requests to /users


router.get('/', (req, res) => {
    res.json(dumData.usersData);
});

router.get('/:age', (req, res) => {
    const age = req.params.age;
    let currentUser = undefined;

    for(let i = 0; i < dumData.usersData.length; i++){
        if(dumData.usersData[i].age == age){
            currentUser = dumData.usersData[i];
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

module.exports = router;