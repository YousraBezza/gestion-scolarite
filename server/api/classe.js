let express = require('express')
let router = express.Router()
const mysql = require('mysql');
const cors = require("cors");


router.get('/:id_grp',(req,res)=>{
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database: 'tpigl'
    })
    const classId = req.params.id_grp
    connection.query("SELECT * FROM eleve, notes WHERE id_grp = ? AND notes.id_etud = eleve.id  ",[classId],(err, rows, fields)=>{
        if(!err){
            
            res.send(rows);
        
        
        }else{
            console.log(err);
            res.end();
            return
        }
    
        
        
    })

    connection.end()
})


module.exports = router
