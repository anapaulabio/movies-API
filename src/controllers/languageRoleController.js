const languageRole = require("../models/language_role");

const languageRoleController = {
  listRole: async (req, res) => {
    const roles = await languageRole.findAll();
    res.json(roles);
  },

  registerRole: async (req, res) => {
    const { language_role } = req.body;
    const role = await languageRole.create({
      language_role,
    });
    res.json(role);
  },

  updateRole: async (req, res) => {
    const { role_id } = req.params;
    const { language_role } = req.body;
    const role = await languageRole.update({
        language_role
    },
    {
        where: {
            role_id
        }
    });
    res.json("Language role updated successfully")
  },

  deleteRole: async (req, res) => {
    const { role_id} = req.params;
    await languageRole.destroy({
        where: {
            role_id
        }
    });
    res.json("Role deleted successfully")
  }
};

module.exports = languageRoleController;
