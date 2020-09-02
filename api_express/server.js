// server.js

const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/environment');
const userRoute = require('./routes/UserRoute');

//mongoose.set('useNewUrlParser', true);
//mongoose.set('useUnifiedTopology', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);

//mongoose.connect(config.mongodb.uri).then(
//  () => {
//    console.log('Database is Connected!');
//  },
//  (err) => {
//    console.log(`Cannot connect to the server: ${err}`);
//  }
//);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let corsOptions = {
//  origin: 'http://0.0.0.0:4200',
//  optionSuccessStatus: 200
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use('/api_express/users', userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
