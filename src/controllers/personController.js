const { Movie, Gender } = require('../models');
const Person = require('../models/person');

const personController = {
    listPerson: async (req,res) =>{
        const person = await Person.findAll({
            include: Movie,
        });
        res.json(person);
    },

    registerPerson: async (req,res) => {
        const { person_name } = req.body;
        const person = await Person.create({
            person_name
        })
        res.json(person);
    }

}

module.exports = personController;