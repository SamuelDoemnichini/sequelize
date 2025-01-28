const Volo = require('./Volo');
const Aeroporto = require('./Aeroporto');
const sequelize = require('../config');

Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportopartenza'});
Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportopartenza'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportopartenza'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportoarrivo'});

const db = {
    sequelize,
    tabelle:[
        Volo,
        Aeroporto
    ]
}

module.exports = db;