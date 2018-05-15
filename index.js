const express = require('express');
const app = express();

require('./server/passport');
require('./server/authRoutes')(app);

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
	console.log('Server listening on port:', PORT)
})