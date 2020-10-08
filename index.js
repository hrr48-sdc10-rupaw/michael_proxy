const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const axios = require('axios');
const port = 3000;

const app = express();

app.use(logger('dev'));
app.use(express.static('.'))
app.use('/hero-section/dist', express.static('../hero-section/dist/'));
app.use('/reviews/client/dist', express.static('../reviews/client/dist'));
app.use('/body/client/dist', express.static('../body/client/dist'))
app.use('/assets', express.static('../reviews/client/dist/assets'));

app.get('/', (req, res) => {
  res.send('OK')
});

app.get('/api/hero/all_info/:id', async (req, res) => {
  let id = req.params.id
  axios.get(`http://localhost:3001/api/hero/all_info/${id}`)
    .then(result => {
      res.send(result.data)
    })
    .catch(err => console.log('error: ', err));
})

app.get('/moist-air/reviews', (req, res) => {
  axios.get(`http://localhost:3002/moist-air/reviews`)
    .then(result => res.send(result.data))
    .catch(err => console.log('error: ', err));
})

app.get('/moist-air/game', (req, res) => {
  axios.get('http://localhost:3003/moist-air/game')
    .then(result => res.send(result.data))
    .catch(err => console.log('following error fetching data for body section: ', err));
})

app.listen(port, () => {
  console.log('Proxy server running at port :', port);
})