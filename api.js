const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/router');

app.use(cors());
app.use(router);
app.listen(port);
