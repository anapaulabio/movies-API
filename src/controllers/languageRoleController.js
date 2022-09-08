const languageRole = require('../models/language_role');

const languageRoleController = {
    listRole: async (req, res) => {
        const roles = await languageRole.findAll();
        res.json(roles)
    },

    registerRole: async (req, res) => {
        const {language_role} = req.body
        const role = await languageRole.create({
            language_role
        })
        res.json(role)
    }
};

module.exports = languageRoleController;