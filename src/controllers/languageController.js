const Language = require('../models/language');

const languageController = {
    listLanguage: async (req,res) => {
        const language = Language.findAll()
        res.json(language)
    }
};

module.exports = languageController;