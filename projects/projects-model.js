

const db = require('../data/dbConfig.js')

module.exports = {
    addProject
    // getProject
}



function addProject(project) {
    return db('projects')
        .insert(project)
}