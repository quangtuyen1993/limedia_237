const BookModel = require("../models/book.model");
const ChapterModel = require("../models/chapter.model");
const BookController = {
  onFetchAll: async (req, res, next) => {
    const books = await BookModel.onFetch();
    res.status(200).send(books);
  },
  onInsert: async (req, res, next) => {
    var data = req.body;
    var book = await BookModel.onInsert(data);
    res.status(200).send(book);
  },
  onFindById: async (req, res, next) => {
    var _id = req.params;
    var books = await BookModel.onFindById(_id);
    res.status(200).send(books);
  },
  onFindByType: async (req, res, next) => {
    try {
      var { _idBookType } = req.params;
      var books = await BookModel.onFetchByType(_idBookType);
      res.status(200).send(books);
    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  },
  readOneChapter: async (req, res, next) => {
    var { _idChapter } = req.params;
    var chapter=await ChapterModel.onFetchChapterById(_idChapter)
    res.status(200).send(chapter)

  },
  readAllChapter: async (req, res, next) => {
    var { _idBook } = req.params;
    var chapters = await ChapterModel.onFetchChapterByBook(_idBook);
    res.status(200).send(chapters);
  },
};
module.exports = BookController;
