const express = require('express');
const Score = require('./scoreModel');

let router = express.Router()

router.post('/', async (req, res, next) => {
   try {
       let {name, score, chapter} = req.body;

       let data = {
           name,
           score,
           chapter
       }

       let addScore = await Score.enterScore(data);
       res.status(201).json(addScore)

   } catch (e) {
       return e
   }
});

router.get('/:id', async (req, res, next) => {
    try {
        let chapter = req.params.id;
        let scores = await Score.getScores(chapter);

        if (!scores) {
            res.status(200).json({
                score: []
            })
        }

        res.status(200).json(scores)
    } catch (e) {
        return e
    }
})

module.exports = router;