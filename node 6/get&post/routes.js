
   var express=require('express')
   var app=express()
const data=['sleep','code'];
module.exports=(app)=>{
      
  app.get('/',(req,res)=>{
    res.render('home',{wish:data})
})


app.get('/about',(req,res)=>{
 res.render("about")
})

app.post('/sent',(req,res)=>{
  console.log(req.body.item)
  data.push(req.body.item)
  res.send(data)
})


}