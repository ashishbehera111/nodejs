   var express=require('express')
   var app=express()
   var port =5000;
//static files
app.use(express.static('public'))
  //routes
require('./routes')(app)

app.listen(port,()=>{
    console.log('listen'+port)
})