var express=require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());
var courss =require("./routes/courss")
app.use("/courss",courss)
var port =  8080
//app.listen(port,function (){console.log("server is running")})
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