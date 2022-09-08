const Person = require('../models/person');

const personController = {
    listPerson: async (req,res) =>{
        const person = await Person.findAll();
        res.json(person);
    }
}

module.exports = personController;