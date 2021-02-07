const express = require('express');
const Chapter = require('./chapterModel');

let router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let allCards = await Chapter.getAll()

        if (!allCards) {
            return res.status(500).json({
                errorMessage: 'error'
            })
        } else {
            return res.status(200).json(allCards)
        }
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
        } else {
            return res.status(200).json(chapter)
        }
    } catch (e) {
        return e
    }
})

module.exports = router;