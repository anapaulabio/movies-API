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
    },

    updateLanguage: async (req, res) => {
        const { language_id } = req.params;
        const language = Language.update({
            language_code,
            language_name
        },
        {
            where: {
                language_id
            }
        })
        res.json("Language updated");       
    },

    deleteLanguage: async (req, res) => {
        const { language_id } = req.params;
        await Language.destroy({
            where: {
                language_id
            }
        });
        res.json("Language deleted");
    }
};

module.exports = languageController;