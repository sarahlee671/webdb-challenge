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

router.put('/:id', async (req, res) => {
  const changes = req.body;
  if(changes.name) {
    try {
      const project = await Projects.updateProject(req.params.id, changes)
      if (project) {
          res.status(200).json(project);
      } else {
          res.status(404).json({message: "null"})
      }
    } catch (error) {
      res.status(500).json({message: "error updating project"});
    }
  } else {
    res.status(400).json({message: 'Please provide name and description or project'})
  }
})

router.delete('/:id', async (req, res) => {
  try {
      const count = await Projects.removeProject(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: `${count} record has been removed`});
      } else {
        res.status(404).json({ message: 'The project could not be found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error removing the project',
      });
    }
  });


module.exports = router;