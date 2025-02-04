const db = require('./tabelle/Associazioni');
const express = require('express');

const app = express();

db.sequelize.authenticate().then( () => { 
   console.log("Connection has been established successfully.")


}).catch((err) => {
    console.log("Errore nella connessione al database",err)
});

db.sequelize.sync().then(() => {
    console.log("Tabelle sincronizzate")
}).catch((err) => {
    console.log("Errore nella sincronizzazione delle tabelle",err)
});

app.get('/fittizi', async (req, res) => {
    await db.tabelle.Categoria.create({nome: "Internazionale"})
    await db.tabelle.Regione.create({nome: "Veneto"})
    await db.tabelle.Citta.create({nome: "Venezia",numeroabitanti: 1000000, fkregione: 1})
    await db.tabelle.Aeroporto.create({codice: 1, nome: "Marco Polo", fkcategoria: 1, fkcitta: 1})
    res.json({message: "Dati inseriti"})
})

app.get('/aeroporti', async (req, res) => {
    res.json({await db.tabelle.Aeroporto.findAll()})
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});