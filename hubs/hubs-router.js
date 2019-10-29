const router = require('express').Router();

const Hubs = require('./hubs-model.js');

router.get('/', (req, res) => {
  Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hubs'
      })
    })
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/id', (req, res) => {

});

module.exports = router;