require("dotenv").config()
let express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send("Fuel API Root Route");
});

const PORT = process.env.PORT || 8083;

app.listen(PORT, function () {
  console.log(`My App is Running on port ${PORT}`);
})
