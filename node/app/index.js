const db = require('./tabelle/Associazioni');
const express = require('express');
const {Op} = require('sequelize'); 
const app = express();
app.use(express.json());


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


app.post('/categoria', async (req, res) => {
    try{
   const categoria = await db.tabelle.Categoria.create({nome: req.body.nome})
    res.json({message: "Categoria inserita"})
    }catch(err){
        res.status(500).json({message: "Errore",error:err})
    }    
})
    


app.post('/regione', async (req, res) => {
    try{
    await db.tabelle.Regione.create({nome: req.body.nome})
    res.json({message: "Regione inserita"})
    }catch(err){
        res.status(500).json({message: "Errore",error:err})
    }
})

app.post('/citta', async (req, res) => {
    try{
    await db.tabelle.Citta.create({
        nome: req.body.nome, 
        numeroabitanti: req.body.numeroabitanti, 
        fkregione: req.body.fkregione})
    res.status(200).json({message: "Citta inserita"})
    }catch(err){
        res.status(500).json({message: "Errore",error:err})
    }
})

app.post('/aeroporto', async (req, res) => {
    try{
    await db.tabelle.Aeroporto.create({
        codice: req.body.codice, 
        nome: req.body.nome, 
        fkcategoria: req.body.fkcategoria, 
        fkcitta: req.body.fkcitta})
    res.status(200).json({message: "Aeroporto inserito"})
    }catch(err){
        res.status(500).json({message: "Errore",error:err})
    }
})

app.post('/volo', async (req, res) => {
    try{
    await db.tabelle.Volo.create({
        orapartenza: req.body.orapartenza,
        durataminuti: req.body.durataminuti, 
        fkaeroportopartenza: req.body.fkaeroportopartenza,
        fkaeroportoarrivo: req.body.fkaereoportoarrivo
    })
    res.status(200).json({message: "Volo inserito"})
    }catch(err){
        res.status(500).json({message: "Errore",error:err})
    }
})
//mostrare tutti i voli in partenza oggi
app.get('/voli/:data', async (req, res) => {
    const data = req.params.ora 
    res.json(await db.tabelle.Volo.findAll({
        where: db.sequelize.where(db.sequelize.fn("day",db.sequelize.col("orapartenza")),{[Op.eq]: ora})
    }))
})




app.listen(3000, () => {
    console.log("Server running on port 3000")
});