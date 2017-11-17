const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const nodemailer = require('nodemailer');
//const session = require('express-session');

const app = express();
//app.set('port', 3330);
//app.engine('handlebars', handlebars);
//app.set('view engine', 'handlebars');


//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(bodyParser
//
//

app.get('/', (req, res)=>{
  //  res.status(200);
    res.send('Hello');
});

app.listen(3339, () =>  console.log('Server started....'));

