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
  const id_pro= 2 ; //on met ici l'id du prof connecté
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
    

    const coursData={
        titre: req.body.titre,
        Promo:req.body.promo,
        description:req.body.description,
        date_h:today,
     
    }
   
   /* cours.findOne({
        where:{
            titre : req.body.titre
        }
    })
    .then(cours => {
        if(!cours){
           */
        cours.create(coursData).then(cours=>{
            res.json({status:cours.titre +'enregistré'})
            .catch(err =>{
                res.send('erreur'+err)
            })
        })
   // }else{res.json({error : 'ce titre existe deja'})}

  //  })

 
    .catch(err =>{res.send('error '+err); console.log("here1")
})
})
module.exports=router