const BaseModel = require('./basemodel');
const db = require('../db/config');

class ScoreModel extends BaseModel {
    constructor(table) {
        super(table);
    }
//TODO work on return route to await the insert, cuts calls and saves pain
    async enterScore(data) {
        try {
            await db(this.table).insert(data);
            return await this.getScores(data.chapter)
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