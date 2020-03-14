
   var express=require('express')
   var app=express()
const data=['eat','sleep','code'];
module.exports=(app)=>{
      
  app.get('/',(req,res)=>{
    res.render('home',{wish:data})
})


app.get('/about',(req,res)=>{
 res.render("about")
})




}