const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const dbUrl = "mongodb://aip:aippassword80@ds131258.mlab.com:31258/developer_dating";

mongoose.connect(dbUrl, { useNewUrlParser: true}, err=> {
  if (err) {
    console.error('Error!' + err)
  } else {
    console.log('Connected to Mogodb')
  }
})

router.get('/',(req,res) =>{
  res.send('Greet from home route')
})

router.post('/register', (req, res)=>{
    let userData = req.body;
    let user = new User(userData)
    user.save((error, registeredUser) =>{
      if(error){
        console.log(error)
      }
      else{
        let payload = { subject: registeredUser._id}
        let token = jwt.sign(payload, 'aip')
        res.status(200).send({token}
      )
      }
      }
    )
})

router.post('/login',(req, res) => {
  let userDats = req.body;

  User.findOne( { email: userDats.email}, (error,user) => {
    if (error){
      console.log(error);
    }
    else {
      if (!user){
        res.status(401).send('Invalid Email')
      }
      else if (user.password !== userDats.password){
        res.status(401).send('Invalid Password')
      }
      else {
        let payloard = { subject: user._id}
        let token = jwt.sign(payloard, 'aip')
        res.status(200).send({ token });
      }
    }
  })
})
module.exports = router;
