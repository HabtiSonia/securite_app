const express = require('express')
const router = express.Router()
const pool = require("../config/connectDB")
const cryptoJs = require("crypto-js");


router.get('/getLog', async (req,res)=>{
    try {
        const loginCompte = req.query;
        console.log("Email enrecypte: ", cryptoJs.AES.encrypt(loginCompte.email, 'secretkey').toString());
        const sqlQuery = `SELECT * FROM login WHERE email="${loginCompte.email}" AND password="${loginCompte.password}";`;
        const rows = await pool.query(sqlQuery);
        console.log('affiche row: ', rows);

        res.status(200).json(rows);
    } catch (error) {
        res.status(404).send(error.message)
        console.log("Error type : ", error.message);
    }
})
router.post('/postCompte', async (req,res)=>{
    try {
        const compte = req.body.newAccount;
        const email = cryptoJs.AES.encrypt(req.body.newAccount.email, 'secretkey').toString();
        const password = cryptoJs.AES.encrypt(req.body.newAccount.password, 'secretkey').toString();
        console.log("email: ",cryptoJs.AES.encrypt(req.body.newAccount.email, 'secretkey').toString());

        const sqlQuery = "INSERT INTO comptes(nom, prenom, email, password) VALUES (?, ?, ?, ?);";
        const rows = await pool.query(sqlQuery, [
            compte.nom,
            compte.prenom, 
            compte.email = email,
           compte.password = password

        ])

        const sqlQuery2 = "INSERT INTO login(email, password) VALUES (?, ?);";
        const rows2 = await pool.query(sqlQuery2, [
            compte.email,
            compte.password      
        ]);
       
        
        res.status(200).json({insertID: rows});
    } catch (error) {
        res.status(400).send(error.message)
    }
})



module.exports= router