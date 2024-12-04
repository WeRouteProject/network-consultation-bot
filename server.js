require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

// app.get('/health', (req, res) => {
//   res.json({ status: 'ok', message: 'Server is running' });
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
