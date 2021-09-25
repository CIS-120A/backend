const express = require('express');
const Chapter = require('./chapterModel');
const Utils = require('./Utils');

let router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let allCards = await Chapter.getAll()

        if (!allCards) {
            return res.status(500).json({
                errorMessage: 'error'
            })
        }

        Utils.getData(allCards).then(data => {
            return res.status(200).json(allCards)
        })
    } catch (e) {
        return e
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let chapter = await Chapter.getChapter(id);

        if (!chapter) {
            return res.status(500).json({
                errorMessage: 'error'
            })
        }

        Utils.getData(chapter).then(data => {
            return res.status(200).json(chapter)
        })
    } catch (e) {
        return e
    }
})

module.exports = router;