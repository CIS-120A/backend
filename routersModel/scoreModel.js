const BaseModel = require('./basemodel');
const db = require('../db/config');

class ScoreModel extends BaseModel {
    constructor(table) {
        super(table);
    }

    async enterScore(data) {
        try {
            return await db(this.table).insert(data);
        } catch (e) {
            return e
        }
    }

    async getScores(chapter) {
        try {
            return await db(this.table).where({chapter}).orderBy('score', 'desc');
        } catch (e) {
            return e
        }
    }
}

const Score = new ScoreModel('scores');
module.exports = Score;