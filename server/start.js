const app=require('./index')
const port = process.env.PORT || 8081;
app.listen(port, ()=>console.log(`server started on port ${port}`))