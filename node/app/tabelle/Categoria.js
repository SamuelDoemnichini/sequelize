const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Categoria extends Model {}

Categoria.init({
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
    modelName: 'Categorie',
    tableName: 'Categorie',
    timestamps: false
});

module.exports = Categoria;