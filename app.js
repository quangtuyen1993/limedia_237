const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./src/db")
//express
const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const bookTypeRouter = require("./src/routes/bookType.route");
const bookRouter = require("./src/routes/book.route");
const chapterRouter = require("./src/routes/chapter.route");
const bodyParser = require("body-parser");

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use(logger('dev'));

    server.use('/api/book',bookRouter)
    server.use('/api/bookType',bookTypeRouter)
    server.use('/api/chapter',chapterRouter)



    server.get("*", (req, res, next) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
