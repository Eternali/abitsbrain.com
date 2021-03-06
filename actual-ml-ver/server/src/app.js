const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// app.get('*', (req, res) => {
//   const context = { url: req.url }
//   renderer
// })

app.get('/abitsbrain', (req, res) => {
  res.send([{
    title: 'Abitsbrain',
    description: 'Intro to abitsbrain!'
  }]);
});

app.listen(process.env.PORT || 3482);