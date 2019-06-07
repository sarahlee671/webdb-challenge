const router = require('express').Router();

const Projects = require('./projects-model.js');

router.post('/', (req, res) => {
    Projects.addProject(req.body)
      .then(project => {
          res.status(201).json(project);
      })
      .catch (err => {
          res.status(500).json(err)
      })
  })


module.exports = router;