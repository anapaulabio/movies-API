const Department = require('../models/department');

const departmentController = {
    listarDepartment: async (req, res) => {
        const department = await Department.findAll()
        res.json(department)
    }
}

module.exports = departmentController;