const { Gender, Movie, MovieCast, Person} = require("../models/index")

const movieCastController = {
    showPerson: async (req, res) => {
        try {
            const result = await MovieCast.findAll({
                include: {
                    model: Person
                }
            });
            res.json(result);
                    
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = movieCastController