const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mlabURI);

require('./services/passport');
require('./models/User');
require('./services/authRoutes')(app);

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
	console.log('Server listening on port:', PORT)
})