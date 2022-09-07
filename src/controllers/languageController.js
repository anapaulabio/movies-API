const Language = require('../models/language');

const languageController = {
    listarLanguage: async (req,res) => {
        const language = Language.findAll()
        res.json(language)
    }
};

module.exports = languageController;