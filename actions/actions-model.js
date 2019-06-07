const db = require('../data/dbConfig.js')

module.exports = {
    addAction
}

function addAction(action) {
    return db('actions')
        .insert(action)
}