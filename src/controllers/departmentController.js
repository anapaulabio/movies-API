const Department = require('../models/department');

const departmentController = {
    listDepartment: async (req, res) => {
        const department = await Department.findAll()
        res.json(department)
    },

    registerDepartment: async (req, res) => {
        const {department_name} = req.body;
        const department = await Department.create({
            department_name
        })
        res.json(department);
    }
}

module.exports = departmentController;