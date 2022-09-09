const Keyword = require('../models/keyword');

const keywordController = {
    listKeyword: async (req,res) => {
        const keyword = await Keyword.findAll()
        res.json(keyword)
    },

    registerKeyword: async (req, res) => {
        const {keyword_name} = req.body;
        const keyword = await Keyword.create({
            keyword_name
        })
        res.json(keyword)
    },

    updateKeyword: async (req, res) => {
        const {keyword_id} = req.params;
        const {keyword_name} = req.body;
        const keyword = await Keyword.update({
            keyword_name
        },
        {
            where: {
                keyword_id
            }
        });
        res.json("Keyword updated");
    },
    
    deleteKeyword: async function(req, res) {
        const {keyword_id} = req.params;
        await Keyword.destroy({
            where: {
                keyword_id
            }
        });
        res.json("Keyword deleted");
    }
};

module.exports = keywordController;