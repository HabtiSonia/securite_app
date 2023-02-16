const express = require('express')
const router = express.Router()
const pool = require("../config/connectDB")
const cryptoJs = require("crypto-js");

router.post('/postCompte', async (req,res)=>{
    try {
        const email = cryptoJs.HmacSHA256(req.body.newAccount.email, 'secretkey').toString();
        const password = cryptoJs.HmacSHA256(req.body.newAccount.password, 'secretkey').toString();

        const compte = req.body.newAccount;
        console.log("email: ",cryptoJs.HmacSHA256(req.body.newAccount.email, 'secretkey').toString());
        const sqlQuery = "INSERT INTO comptes(nom, prenom, email, password) VALUES (?, ?, ?, ?);";
        const rows = await pool.query(sqlQuery, [
            compte.nom,
            compte.prenom, 
            email,
            password       
        ])
       
        
        res.status(200).json({insertID: rows});
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get('/getCompte', async (req,res)=>{
    try {
        const sqlQuery = `SELECT * FROM comptes;`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(404).send(error.message)
        console.log("Error type : ", error.message);
    }
})

module.exports= router