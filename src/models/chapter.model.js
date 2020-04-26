const mongoose = require("mongoose");
const BookModel = require("./book.model");
const Schema = mongoose.Schema;

//chapter Class

const ChapterSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book" },
    name: { type: String, require: true },
    content: { type: String, require: true },
    date: { type: Date, default: Date.now() },
  },
  {
    toJSON: { virtuals: true },
  }
);

//is middleware
//use same as trigger
ChapterSchema.post("save", BookModel.onUpdateDate);

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const Model = mongoose.model("Chapter", ChapterSchema, "Chapter");

const Chapter = {
  onFetch: async () => {
    return await Model.find().populate("listBooks");
  },
  onInsert: async (data) => {
    return await Model(data).save();
  },
  onUpdate: async (data) => {
    var data = req.body;
    await Model.findByIdAndDelete(data._id);
    return await ChapterModel(data).save();
  },

  onFetchChapterById:async(_idChapter)=>{
    return await Model.findById(_idChapter)
  },

  onFetchChapterByBook: async (_idBook) => {
    return await Model.find({ book: _idBook });
  },
};

module.exports = Chapter;
