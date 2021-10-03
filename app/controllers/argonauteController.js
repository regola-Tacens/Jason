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
      console.log(req.body.username)
      try {
        // oncherche si il existe déjà un argonaute avec le meme nom
        const existingArgonaute = await Argonaute.findOne({ where : { username : req.body.username }})
        if(existingArgonaute){
          console.log ('le nom existe déjà')
          return;
        } 

        const argonaute = await Argonaute.create(req.body);
        res.json(argonaute);
      }catch (error) {
        res.status(500).send(error);
      }
    }
};
