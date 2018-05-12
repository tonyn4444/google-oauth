const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ bye: 'buddy' });
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
	console.log('Server listening on port:', PORT)
})