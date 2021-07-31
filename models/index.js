const mongoose = require('mongoose');
require('dotenv').config();

const dbName = process.env.DB_NAME;

const connection = mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// connection.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
// connection.once('open', function () {
//   console.log('We Are Connected to MongoDB!');// eslint-disable-line no-console
// });

module.exports = connection;