const mongoose = require('mongoose');

//create collection for mongo****
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
