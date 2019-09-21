const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/router');

app.use(router);
app.listen(port);
