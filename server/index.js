const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
 
const db = require("./database/index.js");  // Import database connection
const Router = require('./routes/routers.js')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.use('/',Router)

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
