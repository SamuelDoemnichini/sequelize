const Volo = require('./Volo');
const Aeroporto = require('./Aeroporto');
const sequelize = require('../config');
const Categoria = require('./Categoria');
const Citta = require('./Citta');
const Regione = require('./Regione');

Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportopartenza'});
Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportopartenza'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportopartenza'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportoarrivo'});

const db = {
    sequelize,
    tabelle: {
        Volo,
        Aeroporto,
        Categoria,
        Citta,
        Regione
    }
}

module.exports = db;