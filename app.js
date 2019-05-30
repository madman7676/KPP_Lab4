const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const postRouter = express.Router();

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname, 'client');

const app = express();
app.use(express.static(clientPath));

app.get('/', function(_req, res) {
  res.redirect('/Main.html');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
