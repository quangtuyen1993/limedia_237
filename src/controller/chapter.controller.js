const ChapterModel = require("../models/chapter.model");

const ChapterController={
    onFetch:async(req,res,next)=>{
        var chapters = await ChapterModel.onFetch()
        res.status(200).send(chapters);
    },

    onFetchByBook:async(req,res,next)=>{
        var {_idBook}=req.params
        var chapters= await ChapterModel.onFetchChapterByBook(_idBook)
        res.status(200).send(chapters)
    },

    onInsert:async(req,res,next)=>{
        var data = req.body;
        var chapter = await ChapterModel.onInsert(data)
        res.status(200).send(chapter);
    },
    onUpdate:async(req,res,next)=>{
        var data = req.body;
        var chapter = await ChapterModel.onUpdate(data)
        res.status(200).send(chapter)
    },
}
module.exports=ChapterController