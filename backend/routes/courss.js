const express=require("express")
const router=express.Router()
const cors=require("cors")

const mysql=require("mysql")

const cours=require("../models/cours")

/**
 * @swagger
 * /courss:
 *  get:
 *      description: récupérer les cours 
 * /add:
 *  post:
 *      description:  Ajouter un cours à la bdd  
 */
router.get('/',(req,res)=>{
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database: 'tpigl'
    })
  const id_pro= 1 ; //on met ici l'id du prof connecté
    connection.query("SELECT * FROM cours WHERE id_prof = ? ",[id_pro],(err, rows, fields)=>{
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


//////////////////////////////////////
router.post("/add",(req,res)=>{
   
    const today=new Date();
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database: 'tpigl',
    
    })
  const id_pro= 1 ; //on met ici l'id du prof connecté
    connection.query("INSERT INTO cours (titre,description,id_prof,promo,date_h) values (?,?,?,?,?)",[req.body.titre,req.body.description,id_pro,req.body.promo,today],(err, result, fields)=>{
        if(!err){
            
            console.log(result);
            res.end();
            return
        
        }else{
            console.log(err);
            res.end();
            return
        }
    
        
        
    })

    connection.end()


  
})
module.exports=router