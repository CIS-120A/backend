const db = require('../db/config');

class BaseModel {
    constructor(table) {
        this.table = table
    };

    getAll() {
        return db(this.table);
    };

    getChapter(id) {
        return db(this.table).where({chapter: id});
    };
}

module.exports = BaseModel;