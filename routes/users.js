const router = require('express').Router();
let User = require('../models/userModel');


router.route('/').get((req,res,next)=>{
    User.find().then(users => res.json(users))
    .catch(err => res.status(400).json('error'+err));
});

router.post('/add',(req,res,next)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save().then(()=>res.json('user added!'))
    .catch(err => res.status(400).json('error'+err));

});

module.exports= router;

