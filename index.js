require("dotenv").config()
let express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser')

let db = require('./models');

let txRoutes = require('./routes/transactions');
let userRoutes = require('./routes/users');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send("Fuel API Root Route");
});

app.get('/api/ver0001/tx', txRoutes);
app.get('/api/ver0001/users/:userId/tx', txRoutes);
app.delete('/api/ver0001/users/:userId/tx/:id', txRoutes);
app.post('/api/ver0001/users/:userId/tx', txRoutes);
app.put('/api/ver0001/users/:userId/tx/:id', txRoutes);
app.use('/api/ver0001/tx', txRoutes);
app.use('/api/ver0001/users/:userId/tx', txRoutes);

app.get('/api/ver0001/users', userRoutes);
app.delete('/api/ver0001/users/:id', userRoutes);
app.post('/api/ver0001/users', userRoutes);
app.put('/api/ver0001/users/:id', userRoutes);
app.use('/api/ver0001/users', userRoutes);

const PORT = process.env.PORT || 8083;

app.listen(PORT, function () {
  console.log(`My App is Running on port ${PORT}`);
})
