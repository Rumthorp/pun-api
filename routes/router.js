const express = require('express');
var fs = require("fs");
const router = express.Router();
const json = fs.readFileSync('puns.json');
const puns = JSON.parse(json);

router.get('/length', (req, res) => {
  res.send(puns.length.toString());
});

router.get('/', (req, res) => {
  let pun;
  if (parseInt(req.query.index) < 0) pun = -1;
  if (pun !== -1) pun = parseInt(req.query.index) <= puns.length - 1 ? req.query.index : -1;
  res.send(pun === -1 ? { error: 'index does not exist' } : puns[req.query.index]);
});

module.exports = router;
