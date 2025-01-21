import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("aeroporti","root","cisco",{
    host: "mysql",
    dialect: "mysql"
});

sequelize.authenticate().then( () => { 
   console.log("Connection has been established successfully."),


}).catch(() => {
    console.log("Errore nella connessione al database");
});