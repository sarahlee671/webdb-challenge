const router = require('express').Router();

const Projects = require('./projects-model.js');


router.get('/', (req, res) => {
    Projects.getProjects()
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch (error => {
        res.status(500).json({message: "We ran into an error retrieving the information" })
      })
  })

router.post('/', (req, res) => {
    Projects.addProject(req.body)
      .then(project => {
          res.status(201).json(project);
      })
      .catch (err => {
          res.status(500).json(err)
      })
  })


router.get('/:id', (req, res) => {
    const {id} = req.params;
        Projects.getProject()
            .where({id: id})
            .first()
            .then(projects => {
            Projects.getActions()
                .where({project_id: id})
                .then(actions => {
                (projects.actions = actions);
                    return res.status(200).json(projects)
            })
        })
})


module.exports = router;