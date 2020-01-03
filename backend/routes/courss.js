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
        res.end()
        
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
   const id_pro=1 //on met ici l'id du prof connecté
    const today=new Date();
<<<<<<< HEAD
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database: 'tpigl'
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
    
        
        
=======
    const coursData= {
        titre: req.body.titre,
        promo: req.body.promo,
        date_h:today,
       description: req.body.description,
       id_prof:id_pro
    }
   
    cours.create(coursData).then(cours=>{
        res.send(cours)
>>>>>>> parent of 57e9533... ajout docker compose pour les api
    })
    .catch(err =>{console.log("erreur"+err)
   
  
})})
module.exports=router