data={
  name:"ashish",
  degination:"software-enge.."
}
module.exports=(app)=>{
      
  app.get('/',(req,res)=>{
    res.render('home',{data:data})
})


app.get('/home',(req,res)=>{
 res.send("this is second")
})

app.get('/office',(req,res)=>{
 res.send("this is third")
})



}