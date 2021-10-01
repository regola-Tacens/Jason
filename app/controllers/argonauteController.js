const Argonaute = require('../models/argonaute');

module.exports = {

    async getAllArgonautes(req,res) {
      console.log('ok dans le controller');
      try {
        const argonautes = await Argonaute.findAll();
        res.json(argonautes);
      } catch (error) {
        res.status(500).send(error);
      }
    }
};
