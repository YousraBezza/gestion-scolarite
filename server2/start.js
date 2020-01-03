const app=require('./index')
const port = process.env.PORT || 8082;
app.listen(port, ()=>console.log(`server started on port ${port}`))