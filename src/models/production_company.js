const db = require('../database/config');
const {DataTypes} = require ('sequelize');

const production_company = db.define('production_company', {
    company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: DataTypes.STRING
    }
},
{
    tableName: "production_company",
    createdAt: false,
    updatedAt: false
});

module.exports = production_company;