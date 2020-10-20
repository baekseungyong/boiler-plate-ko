const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://bsy:1q2w3e4r@boilerplate.d6vmw.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect...'))
.catch(err => console.log(err))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))