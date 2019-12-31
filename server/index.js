const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition:{
        info: {
            title: 'APIs',
            description: 'Les apis utilisés dans suivi et cours',
            contact: {
                name:"Bezza, Chikh, Khaber"

            },
            servers: ["http://localhost:8081","http://localhost:8080"]
        }
         
    },
    apis: ["./api/*.js ","../backend/routes/courss.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const notes = require('./api/notes');
app.use('/api/notes',notes);
const port = process.env.PORT || 8081;
app.listen(port, ()=>console.log(`server started on port ${port}`))