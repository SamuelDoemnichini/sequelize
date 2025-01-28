const db = require('./tabelle/Associazioni');


db.sequelize.authenticate().then( () => { 
   console.log("Connection has been established successfully.")


}).catch(() => {
    console.log("Errore nella connessione al database");
});