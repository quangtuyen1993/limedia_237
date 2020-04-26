const mongoose = require("mongoose");
const schema = mongoose.Schema;
const BookTypeSchema = schema({
  // book: { type: schema.Types.ObjectId, ref: "Book" },
  name: { type: String, require: true, unique: true, dropDups: true },
});
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const Model = mongoose.model("BookType", BookTypeSchema, "BookType");

const BookType = {
  //insert
  onFetch: async () => {
    return await Model.find();
  },
  //update
  onInsert: async (data) => {
    return await Model(data).save();
  },
  //delete
  onUpdate: async (data) => {
    await Model.findByIdAndDelete(data._id);
    return await Model(data).save();
  },
  onFetchBook: async (id) => {
    return await Model.findById(id);
  },
};

module.exports = BookType;
