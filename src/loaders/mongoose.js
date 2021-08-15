const mongoose = require('mongoose');

//配置环境变量存储KEY
require('dotenv').config();
const mongoDBUser = process.env.REACT_APP_MONGODB_USER;

module.exports = async function () {
  const connection = await mongoose.connect(mongoDBUser, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  return connection.connection.db;
};

