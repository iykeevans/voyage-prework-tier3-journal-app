import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import env from 'dotenv';
import '@babel/polyfill';
import routes from './routes';

env.config();

const port = process.env.PORT || 5000;

const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(routes);

app.listen(port, () => console.log(`Now running on port ${port}`));

export default app;
