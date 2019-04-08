const express = require('express');

const searchRoute = require('./routes/search');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const notFoundMiddleware = require('./middlewares/notFound');

const port = 8000;
const app = express();

app.use(searchRoute);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Port is running on: http://localhost:${port}`);
});
