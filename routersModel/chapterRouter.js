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
        }

        const capTerms = async (arr) => {
            try {
                arr.term = arr.term.charAt(0).toUpperCase() + arr.term.substr(1).toLowerCase();
            } catch (e) {
                 return res.status(500).json({
                errorMessage: 'error'
            })
            }
        }

        const getData = async () => {
            try {
                return await Promise.all(allCards.map(arr => capTerms(arr)));
            }
            catch (e) {
                return res.status(500).json({
                errorMessage: 'error'
                })
            }
        }

        getData().then(data => {
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

        const capTerms = async (arr) => {
            try {
                arr.term = arr.term.charAt(0).toUpperCase() + arr.term.substr(1).toLowerCase();
            } catch (e) {
                 return res.status(500).json({
                errorMessage: 'error'
            })
            }
        }

        const getData = async () => {
            try {
                return await Promise.all(chapter.map(arr => capTerms(arr)));
            }
            catch (e) {
                return res.status(500).json({
                errorMessage: 'error'
                })
            }
        }

        getData().then(data => {
            return res.status(200).json(chapter)
        })
    } catch (e) {
        return e
    }
})

module.exports = router;