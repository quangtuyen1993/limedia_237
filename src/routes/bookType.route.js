const express=require('express')
const router=express.Router()
const BookTypeController=require("../controller/bookType.controller")

//get all
router.get("/",BookTypeController.onFetch)

//insert
router.post("/",BookTypeController.onInsert)

//fetchBookByType
router.get("/:_idBookType",BookTypeController.onFetchBookByType)

module.exports=router