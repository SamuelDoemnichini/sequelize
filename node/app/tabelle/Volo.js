const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Volo extends Model {}

Volo.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    orariopartenza:{
        type: DataTypes.TIME,
    },
    durataminuti:{
        type: DataTypes.SMALLINT,
    },
    fkaeroportopartenza:{
        type: DataTypes.SMALLINT,
    },
    fkaeroportoarrivo:{
        type: DataTypes.SMALLINT,
    },
},{
    sequelize,
    modelName: 'Voli',
    tableName: 'Voli',
    timestamps: false
})

module.exports = Volo;