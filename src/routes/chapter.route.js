const express = require("express");
const router = express.Router();
const ChapterController=require("../controller/chapter.controller")

router.get("/", ChapterController.onFetch);

router.post("/", ChapterController.onInsert);

router.put("/", ChapterController.onUpdate);

router.get("/:_idBook",ChapterController.onFetchByBook)


module.exports = router;
