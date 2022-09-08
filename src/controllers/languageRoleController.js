const languageRole = require('../models/language_role');

const languageRoleController = {
    listRole: async (req, res) => {
        const roles = await languageRole.findAll();
        res.json(roles)
    }
};

module.exports = languageRoleController;