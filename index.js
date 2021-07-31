const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
require('dotenv').config();
//const mongoose = require('mongoose');
const mongooseConnection = require('./models/index.js')


const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

(async function(){
  try{
   await mongooseConnection;
   console.log('dbconnected')
   app.listen(PORT, (err) => {
       if (err) console.log(err);
       console.log(`server listening on ${PORT}`);
   })
  } catch(err) {
    console.log('error', err)
  }
}) ()



// const dbName = process.env.DB_NAME;

// mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
// connection.once('open', function () {
//   console.log('We Are Connected to MongoDB!');// eslint-disable-line no-console
// });

// module.exports = mongoose;