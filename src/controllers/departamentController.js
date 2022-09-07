const Departament = require('../models/departament');

const departamentController = {
    listarDepartament: async (req, res) => {
        const departament = await Departament.findAll()
        res.json(departament)
    }
}

module.exports = departamentController;