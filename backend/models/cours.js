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
        
        Promo: {type:Sequelize.STRING,
        },
        date_h:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        description:{type:Sequelize.STRING,}
    },
    {
    timestamps:false,
    }
)