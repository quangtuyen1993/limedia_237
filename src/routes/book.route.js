const express = require("express");
const router = express.Router();


const BookController=require("../controller/book.controller")
//get all
router.get("/",BookController.onFetchAll);
// router.get("/",(req,res,next)=>{
//     res.status(200).send({message:"hello word"})
// })

//insert Admin
router.post("/",BookController.onInsert);

//find by id book by id
router.get("/findBook/_id",BookController.onFindById);

//find chapter
// router.get("/chapters/:_idBook",BookController.readAllChapter)

//find Chapter
router.get("/readChapter/:_idChapter",BookController.readOneChapter)



//find by Type
router.get("/findBookByType/:_idBookType",BookController.onFindByType);

module.exports = router;
