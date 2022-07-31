var express = require('express');
var router = express.Router();
const userModel = require('./users')
const moment = require('moment')
// const timeModel = require('./users')



/* GET home page. */
router.get('/', function(req, res, next) {
  userModel.find()
  // timeModel.find()
  .then(function(allTask){
    res.render("index" , {obj:allTask , moment})
  })
})


router.post('/create', function(req, res, next) {
  userModel.create({
    taskname:req.body.taskname,
    username:req.body.username
  })
  .then(function(createdTask){
    res.redirect("/")
  })
  // timeModel.create({
  //   time:req.body.time
  // })
  // .then((time)=>{
  //   res.redirect("/")
  // })
})




module.exports = router;
