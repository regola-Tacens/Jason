const Argonaute = require("../models/argonaute");

module.exports = {
  async getAllArgonautes(req, res) {
    try {
      const argonautes = await Argonaute.findAll();
      res.json(argonautes);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async createArgonaute(req, res) {
    try {
      // oncherche si il existe déjà un argonaute avec le meme nom
      const existingArgonaute = await Argonaute.findOne({
        where: { username: req.body.username },
      });
      if (existingArgonaute) {
        console.log("le nom existe déjà");
        return;
      }

      const argonaute = await Argonaute.create(req.body);
      res.json(argonaute);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async deleteArgonaute(req, res) {
    const id = Number(req.params.id);
    console.log("id", id);
    try {
      await Argonaute.destroy({ where: { id: id } });
      res.json("deleted");
    } catch (error) {
      console.log(error);
    }
  },
};
