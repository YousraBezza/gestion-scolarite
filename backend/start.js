const app=require('./server')
var port =  8080 || process.env.PORT
app.listen(port,function (){console.log("server is running")})