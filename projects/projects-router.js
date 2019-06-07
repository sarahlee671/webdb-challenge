const db = require('../data/dbConfig.js')

module.exports = {
    addProject
}

function addProject(project) {
    return db('projects')
        .insert(project)
}