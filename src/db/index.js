require("dotenv").config();
const connect = require("mongoose").connect

var mongoConnect = connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DATABASE_NAME,
});
module.exports = mongoConnect;