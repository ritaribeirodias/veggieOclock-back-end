const Item = require('../models/fruit.model.js');

getItem = async (req, res) => {
  try {
    const items = await Item.find();
    //items.months = JSON.parse(items.months)
    res.status(200).send(items);
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
};

addItem = async (req, res) => {
  try {
    const { name, type, months, info, store, image } = req.body;
    const newItem = await Item.create({ name, type, months, info, store, image });
    //newItem.months = JSON.parse(newItem.months);
    res.status(201).send(newItem);
    console.log(req.body);
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
};


module.exports = { getItem, addItem };
