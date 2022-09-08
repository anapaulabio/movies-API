const Department = require("../models/department");

const departmentController = {
  listDepartment: async (req, res) => {
    const department = await Department.findAll();
    res.json(department);
  },

  registerDepartment: async (req, res) => {
    const { department_name } = req.body;
    const department = await Department.create({
      department_name,
    });
    res.json(department);
  },

  updateDepartment: async (req, res) => {
    const { department_id } = req.params;
    const { department_name } = req.body;

    const department = await Department.update(
      {
        department_name,
      },
      {
        where: {
          department_id,
        },
      }
    );
    res.json("Department updated");
  },

  deleteDepartment: async (req, res) => {
    const { department_id } = req.params;
    await Department.destroy({
      where: {
        department_id,
      },
    });

    res.json("Department deleted");
  },
};

module.exports = departmentController;
