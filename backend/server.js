var express=require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());
var courss =require("./routes/courss")
app.use("/courss",courss)

module.exports=app
if(process.env.NODE_ENV !== 'production') {
    process.once('uncaughtException', function(err) {
      console.error('FATAL: Uncaught exception.');
      console.error(err.stack||err);
      setTimeout(function(){
        process.exit(1);
      }, 100);
    });
  }