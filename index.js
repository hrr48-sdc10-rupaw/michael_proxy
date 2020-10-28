const newrelic = require('newrelic')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const axios = require('axios');
const port = 3000;
app.use(express.json());
var cors = require('cors')
app.use(cors())
// const proxy = require('express-http-proxy');
// app.use('/proxy', proxy({ target: 'http://localhost:3001', changeorigin: true}));

let gameId;



// app.use(function(req, res, next) {
//   console.log('running middleware')
//   // let gameId = req.query.id;
//   // req['gameId'] = gameId;
//   // console.log('check me: ', req['gameId']);
//   if (req.query.id !== undefined) {
//     gameId = req.query.id;
//     req['gameId'] = gameId;
//   } else {
//     req['gameId'] = gameId;
//   }
//   next();
// })
app.use(logger('dev'));
const path = require('path');

// app.use(express.static('.'))
// app.use('/hero-section/dist', express.static('../hero-section/dist/'));
// app.use('/reviews/client/dist', express.static('../reviews/client/dist'));
app.use(express.static(path.join(__dirname, '../body/client/public')))
// app.use('/assets', express.static('../reviews/client/dist/assets'));

app.get('/', (req, res) => {
  // gameId = req.query.id;
  res.send('OK')
});

app.get('/?id=', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

// app.get('/api/hero/all_info/:id', async (req, res) => {
//   let id = req.params.id
//   axios.get(`http://localhost:3003/api/hero/all_info/${id}`)
//     .then(result => {
//       res.send(result.data)
//     })
//     .catch(err => console.log('error: ', err));
// })

// app.get('/moist-air/reviews', (req, res) => {
//   // console.log(req);
//   console.log('///////// for reviews: ', req['gameId'])
//   axios.get(`http://localhost:3002/moist-air/reviews?gameID=${gameId}`)
//     .then(result => res.send(result.data))
//     .catch(err => console.log('error: ', err));
// })

// app.get('http://localhost:3000/moist-air/game', (req, res) => {
//   console.log('///////// for body: ', req['gameId'])
//   axios.get('/moist-air/game/')
//     .then(result => {
//       // console.log(result.data[req['gameId']])
//       res.send(result.data)
//     })
//     .catch(err => console.log('following error fetching data for body section: ', err));
// })

app.listen(port, () => {
  console.log('Proxy server running at port :', port);
})