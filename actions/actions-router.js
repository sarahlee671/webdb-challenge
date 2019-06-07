

const router = require('express').Router();

const Actions = require('./actions-model.js');

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