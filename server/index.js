import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import env from 'dotenv'

env.config();

const port = process.env.PORT || 5000;

const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.json({ statusCode: 200, message: 'Welcome to the journal app' }));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Now running on port ${port}`)
  }
});
