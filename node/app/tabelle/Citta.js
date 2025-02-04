const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Citta extends Model {}

Citta.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true

    },
    nome: {
        type: DataTypes.STRING(20)
    },
    fkcategoria: {
        type: DataTypes.TINYINT
    },
    fkcitta: {
        type: DataTypes.SMALLINT
    }
},{
    sequelize,
    modelName: 'Citta',
    tableName: 'Citta',
    timestamps: false
});

module.exports = Citta;