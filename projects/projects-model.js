

const db = require('../data/dbConfig.js')

module.exports = {
    getProjects,
    addProject,
    getProject,
    getActions

}

function getActions() {
    return db('actions');
}

function getProjects() {
    return db('projects');
}


function addProject(project) {
    return db('projects')
        .insert(project)
}

function getProject(id) {
    return db('projects')

}