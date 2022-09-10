const { Gender, MovieCast } = require("../models");

const genderController = {
  listGender: async (req, res) => {
    const gender = await Gender.findAll();
    res.json(gender);
  },

  listOne: async (req, res) => {
    const { id } = req.params;
    const oneGender = await Gender.findByPk(id);

    res.status(200).json(oneGender);
  },

  registerGender: async (req, res) => {
    const { gender } = req.body;
    const newGender = await Gender.reate({
      gender,
    });
    res.json(newGender);
  },

  updateGender: async (req, res) => {
    const { gender_id } = req.params;
    const { gender } = req.body;
    const upGender = await Gender.update(
      {
        gender,
      },
      {
        where: {
          gender_id,
        },
      }
    );

    res.json("Gender updated");
  },
  deleteGender: async (req, res) => {
    const { gender_id } = req.params;
    await Gender.destroy({
      where: {
        gender_id,
      },
    });
    res.json("Gender deleted");
  },

  showTheMovieCast: async (req, res) => {
    try {
      const result = await Gender.findAll({
        include: {
          model: MovieCast,
          required: true
        },
      });
      res.json(result);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = genderController;
