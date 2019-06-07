

const db = require('../data/dbConfig.js')

module.exports = {
    getProjects,
    addProject,
    getProject,
    getActions,
    updateProject,
    removeProject

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

function updateProject(id, changes) {
    return db ('projects')
        .where({id})
        .update(changes)
        .then(count => {
            if (count > 0) {
                return getProject(id);
            } else {
                return null;
            }
        });
}

function removeProject(id) {
    return db('projects')
      .where('id', id)
      .del();
}