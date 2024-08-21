const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB, URL:', MONGO_URL))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

module.exports = mongoose;
