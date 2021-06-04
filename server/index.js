const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;
const axios = require('axios');
const { token, api } = require('../server/apiService/config')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

var id = 11001;

app.get('/getreviews', (req, res) => {
  var getReview = {
    method: 'get',
    url: api + `/reviews?product_id=${id}`,
    headers: {
      'Authorization': token
    }
  };
   axios(getReview)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
})

app.get('/getcharacteristics', (req, res) => {
  var getReview = {
    method: 'get',
    url: api + '/reviews/meta?product_id=11001',
    headers: {
      'Authorization': token
    }
  };
   axios(getReview)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
