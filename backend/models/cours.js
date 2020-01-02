const Sequelize = require("sequelize")
const db= require("../database/db")
module.exports=db.sequelize.define(
 
    'cours',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,

        },
        titre: {type:Sequelize.STRING,
        },
        
        promo: {type:Sequelize.STRING,
        },
        date_h:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        description:{type:Sequelize.STRING,},
        id_prof:  {
            type: Sequelize.INTEGER,
            references: {
               model: 'prof', // 'persons' refers to table name
               key: 'id', // 'id' refers to column name in persons table
            }
         }
    },
    {
    timestamps:false,
    }
)