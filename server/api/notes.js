let express = require('express')
let router = express.Router()
const mysql = require('mysql');
const cors = require("cors");

router.get('/:id_modu',(req,res)=>{
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database: 'tpigl'
    });
    
    let newNote1 = 18;
    let newnote2 = 19;
    let newnote3 = 20;
    let newabs = 3;
    let etud = 170147;
    const moduID = req.params.id_modu
    let sql = 'UPDATE notes SET Note1 = 18 , note2 = 19 , note3 = 20 , abs = 3 WHERE id_modu = ? AND id_etud = 170151';
    let query = connection.query(sql,[moduID],(err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('note updated ....');
    });


    connection.end();
})
module.exports = router;
                           