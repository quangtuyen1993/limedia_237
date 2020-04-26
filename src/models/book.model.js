const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BookSchema = schema(
  {
    name: { type: String, require: true },
    img: { type: String },
    description: { type: String },
    authors: [{ type: String }],
    bookTypes: [{ type: schema.Types.ObjectId, ref: "BookType" }],
    date: { type: Date, require: true, default: Date.now },
    dateUpdate: { type: Date, require: true, default: Date.now },
  },
  {
    id: false,
    timestamps: {
      createdAt: "date",
      updatedAt: "dateUpdate",
    },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

BookSchema.virtual("chapters", {
  ref: "Chapter",
  localField: "_id",
  foreignField: "book",
  justOne: false,
  count: true,
});

const Model = mongoose.model("Book", BookSchema, "Book");

const Book = {
  onFetch: async () => {
    return await Model.find().populate("bookTypes").populate("chapters");
  },

  onFetchByType: async (_idBookType) => {
    return await Model.find({
      bookTypes: {_id: _idBookType },
    })
      .populate("bookTypes")
      .populate("chapters");
  },

  onInsert: async (data) => {
    return await Model(data).save();
  },
  onFindById: async (id) => {
    return await Model.findById(id).populate("bookTypes").populate("chapters");
  },

  //provide on post in ChapterModel
  onUpdateDate: async (doc) => {
    await Model.findOneAndUpdate(
      { _id: doc.book },
      { $set: { dateUpdate: Date.now() } },
      { new: true }
    );
  },
};

module.exports = Book;
