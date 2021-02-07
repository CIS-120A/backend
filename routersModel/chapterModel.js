const BaseModel = require('./basemodel');

class ChapterModel extends BaseModel {
    constructor(table) {
        super(table);
    }
}

const Chapter = new ChapterModel('flashcards');
module.exports = Chapter;