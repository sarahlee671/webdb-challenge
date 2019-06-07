

const router = require('express').Router();

const Actions = require('./actions-model.js');

router.get('/', (req, res) => {
    Actions.getActions()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch (error => {
        res.status(500).json({message: "We ran into an error retrieving the information" })
      })
  })

router.post('/', (req, res) => {
    Actions.addAction(req.body)
      .then(action => {
          res.status(201).json(action);
      })
      .catch (err => {
          res.status(500).json(err)
      })
  })


module.exports = router;