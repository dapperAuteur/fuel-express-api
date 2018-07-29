require("dotenv").config()
let express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser')

let db = require('./models');

let auth = require('./middleware/auth');
let authRoutes = require('./routes/auth');
let fuelRoutes = require('./routes/fuels');
let tagRoutes = require('./routes/tags');
let txRoutes = require('./routes/transactions');
let userRoutes = require('./routes/users');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send("Fuel API Root Route");
});

app.use('/api/ver0001/auth', authRoutes);

app.get('/api/ver0001/fuels', fuelRoutes);
app.get('/api/ver0001/fuels/:id', fuelRoutes);
app.delete('/api/ver0001/fuels/:id', auth.ensureCorrectUser, fuelRoutes);
app.post('/api/ver0001/fuels', auth.loginRequired, fuelRoutes);
app.put('/api/ver0001/fuels/:id', auth.ensureCorrectUser, fuelRoutes);
app.use('/api/ver0001/fuels', auth.ensureCorrectRole, fuelRoutes);

app.get('/api/ver0001/tags', tagRoutes);
app.get('/api/ver0001/tags/:id', tagRoutes);
app.delete('/api/ver0001/tags/:id', auth.ensureCorrectRole, tagRoutes);
app.post('/api/ver0001/tags', auth.loginRequired, tagRoutes);
app.put('/api/ver0001/tags/:id', auth.ensureCorrectRole, tagRoutes);
app.use('/api/ver0001/tags', auth.ensureCorrectRole, tagRoutes);

app.get('/api/ver0001/tx', txRoutes);
app.get('/api/ver0001/tx/:id', txRoutes);
app.get('/api/ver0001/users/:userId/tx', txRoutes);
app.delete('/api/ver0001/users/:userId/tx/:id', auth.ensureCorrectRole, txRoutes);
app.post('/api/ver0001/users/:userId/tx', auth.ensureCorrectUser, txRoutes);
app.put('/api/ver0001/users/:userId/tx/:id', auth.ensureCorrectUser, txRoutes);
app.use('/api/ver0001/tx', auth.ensureCorrectUser, txRoutes);
app.use('/api/ver0001/users/:userId/tx', auth.ensureCorrectUser, txRoutes);

app.get('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);
app.get('/api/ver0001/users/:id', auth.ensureCorrectUser, userRoutes);
app.delete('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.post('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);
app.put('/api/ver0001/users/:id', auth.ensureCorrectRole, userRoutes);
app.use('/api/ver0001/users', auth.ensureCorrectRole, userRoutes);

const PORT = process.env.PORT || 8083;

app.listen(PORT, function () {
  console.log(`My App is Running on port ${PORT}`);
})
