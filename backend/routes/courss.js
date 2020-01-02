const express=require("express")
const router=express.Router()
const cors=require("cors")

const mysql=require("mysql")

const cours=require("../models/cours")


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
    const coursData= {
        titre: req.body.titre,
        promo: req.body.promo,
        date_h:today,
       description: req.body.description,
       id_prof:id_pro
    }
   
    cours.create(coursData).then(cours=>{
        res.send(cours)
    })
    .catch(err =>{console.log("erreur"+err)
   
  
})})
module.exports=router