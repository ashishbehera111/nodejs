   var express=require('express')
   var app=express()
   var port = 5000;
//static files
app.use(express.static('public'))
  //routes
require('./routes')(app)

app.set('view engine','ejs')

app.get('/profile/:id',(req,res)=>{
  res.send("your requested "+ req.params.id)
})

app.listen(port,()=>{
    console.log('listen'+port)
})