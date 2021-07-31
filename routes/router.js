const router = require('express').Router();
const { getItem, addItem } = require('../controllers/fruit.controllers');

router.get('/items', getItem);
router.post('/postItem', addItem);

module.exports = router;