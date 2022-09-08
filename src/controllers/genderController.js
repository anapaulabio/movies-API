const Gender = require("../models/gender");

const genderController = {
  listGender: async (req, res) => {
    const gender = await Gender.findAll();
    res.json(gender);
  },

  registerGender: async (req, res) => {
    const { gender } = req.body;
    const genderC = await Gender.create({
      gender,
    });
    res.json(genderC);
  },

  updateGender: async (req, res) => {
    const { gender_id } = req.params;
    const { gender } = req.body;
    const genderC = await Gender.update(
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
            gender_id
        }
    });
    res.json("Gender deleted");
  }
};

module.exports = genderController;
