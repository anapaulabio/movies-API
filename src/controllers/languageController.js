const Language = require("../models/language");

const languageController = {
  listLanguage: async (req, res) => {
    const language = await Language.findAll();
    res.json(language);
  },

  listOne: async (req, res) => {
    const { id } = req.params;
    const oneLanguage = await Language.findByPk(id);

    res.status(200).json(oneLanguage);
  },

  registerLanguage: async (req, res) => {
    const { language_code, language_name } = req.body;
    const language = await Language.create({
      language_code,
      language_name,
    });
    res.json(language);
  },

  updateLanguage: async (req, res) => {
    const { language_id } = req.params;
    const language = await Language.update(
      {
        language_code,
        language_name,
      },
      {
        where: {
          language_id,
        },
      }
    );
    res.json("Language updated");
  },

  deleteLanguage: async (req, res) => {
    const { language_id } = req.params;
    await Language.destroy({
      where: {
        language_id,
      },
    });
    res.json("Language deleted");
  },
};

module.exports = languageController;
