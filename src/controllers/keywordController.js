const Keyword = require('../models/keyword');

const keywordController = {
    listarKeyword: async (req,res) => {
        const keyword = await Keyword.findAll()
        res.json(keyword)
    }
};

module.exports = keywordController;