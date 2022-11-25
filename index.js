const express = require('express');
const router = express.Router();

const app = express();
app.use(express.json());

router.get('/', (_req, res) => {
	return res.status(200).json({
		code: '200',
		message: 'hello',
	});
});

app.use('/', router);

const port = process.env.PORT || 3001;
app.listen(port, console.log('app running on port: ' + port));
