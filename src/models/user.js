const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchemas = schema({
  username: { type: String ,require:true},
  password: { type: String,require:true },
  age: { type: Number,require:true }
});
mongoose.set("useFindAndModify", false);
const User = mongoose.model("User", userSchemas, "User");
module.exports = User;