import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import env from 'dotenv';
import '@babel/polyfill';
import path from 'path';

import routes from './routes';

env.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors())

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Get static files from react app
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Now running on port ${port}`));

export default app;
