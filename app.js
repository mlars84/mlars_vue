const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//set port
app.set('port', (process.env.PORT || 3000));

//listening on 3000
app.listen(app.get('port'), function() {
  console.log('listening on "port"');
});
