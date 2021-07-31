const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String, 
    required: true,
  },
  type: {
      type: String,
      required: true,
  },
  months: {type: Array, required: true},

  info:{
  type: String,
  required: true,
  },
  store:{
    type: String,
    required: true,
  },
  image:{
  type: String,
  required: true,
},
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

