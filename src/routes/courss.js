const express=require("express")
const courss=express.Router()
const cors=require("cors")

const cours=require("../models/cours")
courss.use(cors())
courss.post("/cours",(req,res)=>{
    const today=new Date();
    const coursData={
        titre= req.body.titre,
        promo=req.body.promo,
        date_h=today
    }
    cours.findOne({
        where:{
            titre : req.body.titre
        }
    })
    .then(cours => {
        if(!cours){
        cours.create(coursData).then(cours=>{
            res.json({status:cours.titre +'enregistré'})
            .catch(err =>{
                res.send('erreur'+err)
            })
        })
    }else{res.json({error : 'ce titre existe deja'})}
    })
    .catch(err =>{res.send('error '+err)})
})
module.exports=courss