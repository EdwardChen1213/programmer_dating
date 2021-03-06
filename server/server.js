const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const api = require('./routes/api')

app.use(cors());

app.use(bodyParser.json());

app.use('/api',api)

app.get('/', function (req, res){
  res.send("HELLO FROM SERVER")
})

app.listen(port,function () {
  console.log('SERVER RUNNING ON LOCALHOST:' + port)
})
