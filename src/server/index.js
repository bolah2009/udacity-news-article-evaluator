const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const analyse = require('./analysisAPI.js');
const cleanData = require('./cleanData.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(express.static('dist'));

const port = 5000;

const listening = port => {
  console.log('Server running ...');
  console.log(`Local Network http://localhost:${port}`);
  console.log(`Your Network http://192.168.43.134:${port}`);
};

app.listen(port, listening(port));

let analysedData = {};

const analyseData = (req, res) => {
  const {
    body: { url },
  } = req;

  analyse.extract({ url }, (error, response) => {
    if (error) {
      throw error;
    }
    analysedData = cleanData(response, url);

    res.send(analysedData);
  });
};

app.post('/submit', analyseData);
