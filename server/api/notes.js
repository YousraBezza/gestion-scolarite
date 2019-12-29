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
    for (let i=0; i< req.body.length;i++)
    {
    const moduID = req.params.id_modu;
    const etudID = req.body[i].id_etud;
    const NNote1 = req.body[i].Note1;
    const Nnote2 = req.body[i].note2;
    const Nnote3 = req.body[i].note3;
    let sql = 'UPDATE notes SET Note1 = ? , note2 = ? , note3 = ?  WHERE id_modu = ? AND id_etud = ?';
    let query = connection.query(sql,[NNote1,Nnote2,Nnote3,moduID,etudID],(err, result)=>{
        if(err) throw err;
        console.log(result);
      
    });
    };  
    res.send('notes updated ....');
    connection.end();
})
module.exports = router;
                           
                           