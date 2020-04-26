const BookTypeModel = require("../models/bookType.model");
const BookModel = require("../models/book.model");
const BookTypeController = {
  onFetch: async (req, res, next) => {
    var bookTypes = await BookTypeModel.onFetch();
    res.status(200).send(bookTypes);
  },
  onInsert: async (req, res, next) => {
    var data = req.body;
    var bookType = await BookTypeModel.onInsert(data);
    res.status(200).send(bookType);
  },
  onFetchBookByType: async (req, res, next) => {
    var { _idBookType } = req.params;
    var books = await BookModel.onFetchByType(_idBookType);
    res.status(200).send(books);
  },
};
module.exports = BookTypeController;
