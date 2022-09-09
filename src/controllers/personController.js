const { Movie, Gender } = require("../models");
const Person = require("../models/person");

const personController = {
  listPerson: async (req, res) => {
    const person = await Person.findAll();
    res.json(person);
  },

  registerPerson: async (req, res) => {
    const { person_name } = req.body;
    const person = await Person.create({
      person_name,
    });
    res.json(person);
  },

  updatePerson: async (req, res) => {
    const { person_id } = req.params;
    const { person_name } = req.body;
    const person = await Person.update({
        person_name
    },
    {
        where: {
            person_id
        }
    });
    res.json("Person updated successfully")
  },

  deletePerson: async (req, res) => {
    const { person_id } = req.params;
    await Person.destroy({
        where: {
            person_id
        }
    });
    res.json("Person deleted")
  }
};

module.exports = personController;
