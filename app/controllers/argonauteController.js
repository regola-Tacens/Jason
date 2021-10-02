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
    },
    async createArgonaute(req,res) {
      console.log(req.body);
      console.log('request', Object.keys(req.body)[0])
      const author = Object.keys(req.body)[0]
      console.log('ok');
      try {
        const argonaute = await Argonaute.create({username: author});
        res.json(argonaute);
      }catch (error) {
        res.status(500).send(error);
      }
    }
};
