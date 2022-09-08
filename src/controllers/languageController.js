const Language = require('../models/language');

const languageController = {
    listLanguage: async (req,res) => {
        const language = Language.findAll()
        res.json(language)
    },

    registerLanguage: async (req, res) => {
        const {language_code, language_name} = req.body
        const language = Language.create({
            language_code,
            language_name
        })
        res.json(language)
    }
};

module.exports = languageController;