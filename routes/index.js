var express = require('express');
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "the job market is horrible right now!",
    user: "dev",
    added: new Date(),
  },
  {
    text: "Hope i will land a job soon",
    user: "user",
    added: new Date(),
  },

]

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thoughts board', heading: 'Drop your thoughts about the current web dev job market or general thoughts', messages: messages });
});

router.get('/new', function(req, res){
  res.render('form', {title: 'New message'})
})

router.post('/new', function(req, res){
  messages.push({text:req.body.newMessage, user: req.body.newAuthor, added: new Date()})
  res.redirect('/')
})


module.exports = router;
