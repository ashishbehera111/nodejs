data={
  name:"ashish",
  degination:"software-enge.."
}
module.exports=(app)=>{
      
  app.get('/',(req,res)=>{
    res.render('home',{data:data})
})


app.get('/about',(req,res)=>{
 res.render("about")
})

app.get('/profile',(req,res)=>{
 res.send("this is third")
})

}