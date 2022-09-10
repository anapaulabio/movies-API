const { Person, MovieCast } = require("../models");


const personController = {
  listPerson: async (req, res) => {
    const person = await Person.findAll();
    res.json(person);
  },

  listOne: async (req, res) => {
    const { id } = req.params;
    const onePerson = await Person.findByPk(id);

    res.status(200).json(onePerson);
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
  },

  showTheMovieCast: async (req, res) => {
    try {
      const resultPerson = await Person.findAll({
        include: {
           model: MovieCast
        }
      });
      res.json(resultPerson)
      
    } catch (error) {
      console.error(error);
    }

  }
};

module.exports = personController;
